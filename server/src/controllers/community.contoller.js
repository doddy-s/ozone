const { Sequelize, Transaction } = require("sequelize");
const { Community, Member, User, Post } = require("../../sequelize/models");
const dbConfig = require("../../sequelize/config/config")[
  process.env.NODE_ENV || "development"
];

const createCommunity = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { name, description, media } = req.body;

    const newCommunity = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Community.create(
          {
            name: name,
            description: description,
            media: media,
          },
          { transaction: t }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "Community has been successfully created",
      data: newCommunity,
    };

    return res.status(201).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

const getCommunities = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const communities = await Community.findAll({
      attributes: ["communityId", "name", "desc", "media"],
      limit: 10,
    });

    //console.log(communities.length);
    for (let i = 0; i < communities.length; i++) {
      communities[i].dataValues.memberCount = await Member.count({
        where: { communityId: communities[i].dataValues.communityId },
      });
    }

    const response = {
      code: 200,
      status: "Ok",
      message: "Communities have been successfully retrieved",
      data: communities,
    };

    return res.status(200).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

const getCommunityById = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { communityId } = req.params;

    console.log(req.params);

    const community = await Community.findOne({
      where: { communityId: communityId },
      include: {
        model: Post,
        attributes: ["postId", "tag", "up", "down", "content", "createdAt"],
      },
    });

    const response = {
      code: 200,
      status: "Ok",
      message: "Community has been successfully retrieved",
      data: community,
    };

    return res.status(200).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

const joinCommunity = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { userId } = req;
    const { communityId } = req.params;
    console.log("communityId: " + communityId);

    const newMember = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Member.create(
          {
            userId: userId,
            communityId: communityId,
          },
          { transaction: t }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "User has been successfully joined the community",
      data: newMember,
    };

    return res.status(201).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

const getJoinedCommunities = async (req, res) => {
  const sequelize = new Sequelize(dbConfig);

  try {
    const { userId } = req;

    const data = await User.findOne({
      where: { userId: userId },
      include: {
        model: Community,
        attributes: ["communityId", "name"],
      },
    });

    const response = {
      code: 200,
      status: "Ok",
      message: "Communities have been successfully retrieved",
      data: data.Communities,
    };

    return res.status(200).json(response);
  } catch (error) {
    error.code = 500;
    error.status = "Internal Server Error";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

module.exports = {
  createCommunity,
  getCommunities,
  getCommunityById,
  joinCommunity,
  getJoinedCommunities,
};
