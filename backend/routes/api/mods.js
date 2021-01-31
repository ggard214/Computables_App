const express = require("express");
const router = express.Router();

const db = require("../../db/models");

const { User, Project, Comment, Topic, PicVid, TopProjJoin } = db;

router.get("/", async (req, res, next) => {
  try {
    const builds = await TopProjJoin.findAll({
      where: { topId: 4 },
      include: [
        {
          model: Project,
          attributes: ["title", "id", "userId"],
          include: [{ model: User }, { model: PicVid }],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    const mediaContainer = {};
    // await Promise.all(
    //   builds.map(async (build) => {
    //     const { id } = build.Project;
    //     const media = await PicVid.findAll({
    //       where: { projId: id },
    //     });
    //     mediaContainer[id] = media;
    //     return build;
    //   })
    // );

    res.json({ builds, mediaContainer });
  } catch (e) {
    next(e);
  }
});

router.get(`/:id(\\d+)`, async (req, res, next) => {
  try {
    const projId = parseInt(req.params.id, 10);
    console.log(projId);
    const article = await TopProjJoin.findOne({
      where: { topId: 4, projId: projId },
      include: [
        {
          model: Project,
          attributes: ["title", "id", "summary", "steps", "userId"],
          include: [
            { model: User },
            { model: PicVid },
            { model: Topic },
            { model: Comment, include: User },
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.json({ article });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
