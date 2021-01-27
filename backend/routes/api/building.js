const express = require("express");
const router = express.Router();

const db = require('../../db/models');

const { User, Project, Comment, Topic, PicVid, TopProjJoin } = db;

router.get("/", async (req, res, next) => {
  try {
    const builds = await TopProjJoin.findAll({
      where: { topId: 1 },
      include: [
        {
          model: Project,
          attributes: ["title", "id", "userId"],
          include: [{ model: User}, {model: PicVid}],          
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    const mediaContainer = {};
// await Promise.all( 
//     builds.map(async (build) => {
// const {id} = build.Project
//        const media = await PicVid.findAll({
//            where: {projId: id}

//        })
//        mediaContainer[id] = media;
//        return build;
//        }));

    return res.json({ builds, mediaContainer });
  } catch (e) {
    next(e);
  }
});



module.exports = router;