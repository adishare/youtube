var VideoModel = require('../models/VideoModel.js');

module.exports = {

    like: function (req,res) {
        VideoModel.findOne({_id : req.params.id})
        .then((thread) => {
            let index = thread.likes.indexOf(req.params.userId)
            let message = ''
            if(index == -1){
                thread.likes.push(req.params.userId)
                message = 'liked'
            } else {
                thread.likes.splice(index,1)
                message = 'unliked'
            }
            thread.save()
            .then((result) => {
                res.json({
                    result,message
                })
            }).catch((err) => {
                res.json(err)
            });

        }).catch((err) => {
            console.log({err});
        });

    },

    list: function (req, res) {
        VideoModel.find(function (err, Videos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Video.',
                    error: err
                });
            }
            return res.json(Videos);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        VideoModel.findOne({_id: id}, function (err, Video) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Video.',
                    error: err
                });
            }
            if (!Video) {
                return res.status(404).json({
                    message: 'No such Video'
                });
            }
            return res.json(Video);
        });
    },

    create: function (req, res) {
        var Video = new VideoModel({
			videoId : req.body.videoId,
			likes : req.body.likes

        });

        Video.save(function (err, Video) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Video',
                    error: err
                });
            }
            return res.status(201).json(Video);
        });
    },
};
