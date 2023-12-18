// stores/counter.js
import { defineStore } from 'pinia'

export const useCoreStore = defineStore('counter', {
    state: () => {
        return {
            currentlyPracticedTopic: null,
            topics: {
                "drawing": [
                    {
                        "id": 0,
                        "title": "Magatsu Art Generator",
                        "content": "Sketch something based on [this art generator prompt](https://www.magatsu.net/generators/art/index.php)"
                    },
                    {
                        "id": 1,
                        "title": "Drawingprompt.com Exercise",
                        "content": "Sketch something based on [this drawing prompt](https://drawingprompt.com)"
                    },
                    {
                        "id": 2,
                        "title": "Yourartpath Practice",
                        "content": "Sketch something based on [this prompt](https://yourartpath.com/art-prompt-generator)"
                    },
                    {
                        "id": 101,
                        "title": "Drawing Practice #1",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a sphere cut in half"
                    },
                    {
                        "id": 102,
                        "title": "Drawing Practice #2",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw two overlapping spheres cut in four equal parts"
                    },
                    {
                        "id": 103,
                        "title": "Drawing Practice #3",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a row of overlapping spheres converging towards a point"
                    },
                    {
                        "id": 104,
                        "title": "Drawing Practice #4",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a sphere, add light and shadow (both on the object and on the ground)"
                    },
                    {
                        "id": 105,
                        "title": "Drawing Practice #5",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a couple of cylinders, partly overlapping"
                    },
                    {
                        "id": 106,
                        "title": "Drawing Practice #6",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a bunch of complex polygons and extrude them to be 3D"
                    },
                    {
                        "id": 107,
                        "title": "Drawing Practice #7",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw floating cubes in different rotations, overlapping. Use freehand without ruler or perspective grid."
                    },
                    {
                        "id": 108,
                        "title": "Drawing Practice #8",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw two eyeballs (sphere with circles on them) looking in the same direction, optionally shade them"
                    },
                    {
                        "id": 109,
                        "title": "Drawing Practice #9",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw two 'pyramids' of cubes and cylinders stacked on top of each other. Divide the shapes into four."
                    },
                    {
                        "id": 110,
                        "title": "Drawing Practice #10",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw two cylinders and spheres, one each whole, one cut in half"
                    },
                    {
                        "id": 111,
                        "title": "Drawing Practice #11",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw short cables made from bent cylinders. Cut them in equal segments."
                    },
                    {
                        "id": 112,
                        "title": "Drawing Practice #12",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw five bent boxes, cut them in equal segments."
                    },
                    {
                        "id": 113,
                        "title": "Drawing Practice #13",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a sphere, sliced several times, with the parts floating slightly apart but overlapping."
                    },
                    {
                        "id": 114,
                        "title": "Drawing Practice #14",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a box. Extrude other boxes from the box, making a complex object. Shade faces pointing the same way equally."
                    },
                    {
                        "id": 115,
                        "title": "Drawing Practice #15",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw bowels made from a cube, from a sphere and from a cylinder"
                    },
                    {
                        "id": 116,
                        "title": "Drawing Practice #16",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a bunch of wires (slightly bent cylinders), held together by a ring or torus in the middle of the bundle"
                    },
                    {
                        "id": 117,
                        "title": "Drawing Practice #17",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a 'totem' from different shapes on top of another and fused together. Feel free to extrude from them other shapes."
                    },
                    {
                        "id": 118,
                        "title": "Drawing Practice #18",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a complex box by extruding and cutting other shapes from it. Shade it."
                    },
                    {
                        "id": 119,
                        "title": "Drawing Practice #19",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a cup of coffee with a saucer and a handle. Add a cylindrical marshmallow on top."
                    },
                    {
                        "id": 120,
                        "title": "Drawing Practice #20",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw two boxes with a constructed 1-point-perspective. Cut them into equal segments (in perspective)."
                    },
                    {
                        "id": 121,
                        "title": "Drawing Practice #21",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a box with various cutouts (like a building with windows and doors) in 1-point-perspective."
                    },
                    {
                        "id": 122,
                        "title": "Drawing Practice #22",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a street with blocky buildings in one-point-perspective."
                    },
                    {
                        "id": 123,
                        "title": "Drawing Practice #23",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a chest based on a box in two-point-perspective."
                    },
                    {
                        "id": 124,
                        "title": "Drawing Practice #24",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a street corner based on a boxy building in two-point-perspective."
                    },
                    {
                        "id": 125,
                        "title": "Drawing Practice #25",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw a hand made from cylinders and boxes."
                    },
                    {
                        "id": 126,
                        "title": "Drawing Practice #26",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nConstruct a maze made from a box with cutouts in 2-point-perspective. Shade faces pointing the same way equally."
                    },
                    {
                        "id": 127,
                        "title": "Drawing Practice #27",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nDraw the same box in at least five different rotations. Use freehand, but be mindful of perspective."
                    },
                    {
                        "id": 128,
                        "title": "Drawing Practice #28",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nMake a hand out of boxes and cylinders. Let it hold a cylinder (e.g. a coke can)"
                    },
                    {
                        "id": 129,
                        "title": "Drawing Practice #29",
                        "content": "*Inspired by [Marc Brunet](https://www.youtube.com/watch?v=K5AV42mgAe0)* \n\nUsing a reference, draw a simplified skull out of base shapes."
                    }
                ],
                "uke": [
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=yBSHVqtEnC8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=1&pp=iAQB)",
                        "title": "DAY 1 - 30 Day Uke Course - SETTING UP"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=9QXr8yuutTE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=2&pp=iAQB)",
                        "title": "DAY 2 - 30 Day Uke Course - FINGERPICKING Adele Someone Like You"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=MGLDb7OBPFk&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=3&pp=iAQB)",
                        "title": "DAY 3 - 30 Day Uke Course - FINGERPICKING Can't Help Falling In Love"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=TDzC9dplNmQ&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=4&pp=iAQB)",
                        "title": "DAY 4 - 30 Day Uke Course - FINGERPICKING Hallelujah Leonard Cohen"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=3vvBuhBNUWQ&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=5&pp=iAQB)",
                        "title": "DAY 5 - 30 Day Uke Course - DIFFICULT CHORD SWITCHES MADE EASY"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=DNMBTl9VCZE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=6&pp=iAQB)",
                        "title": "DAY 6 - 30 Day Uke Course - READING MUSIC Quarter Notes, Rests"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=aPr7Row0Sj8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=7&pp=iAQB)",
                        "title": "DAY 7 - 30 Day Uke Course - READING MUSIC Eighth Notes"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=829jI79Ofuk&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=8&pp=iAQB)",
                        "title": "DAY 8 - 30 Day Uke Course - SCALES C Major Scale"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=Tfb7NdsJYVE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=9&pp=iAQB)",
                        "title": "DAY 9 - 30 Day Uke Course - SCALES G Major Scale"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=Zcd-FONjkeg&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=10&pp=iAQB)",
                        "title": "DAY 10! 30 Day Uke Course - SCALES D Major Scale"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=9qQO-y1eFAw&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=11&pp=iAQB)",
                        "title": "DAY 11 - 30 Day Uke Course - STUDYING FOR YOUR TEST"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=khvdHeWdKe8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=12&pp=iAQB)",
                        "title": "DAY 12 - 30 Day Uke Course - TEST"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=jctPeMxpRxY&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=13&pp=iAQB)",
                        "title": "DAY 13 - 30 Day Uke Course - TEST ANSWERS"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=n9V-u5CfKu4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=14&pp=iAQB)",
                        "title": "DAY 14 - 30 Day Uke Course - NEW CHORDS"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=8NA-AiWI1q8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=15&pp=iAQB)",
                        "title": "DAY 15 - 30 Day Uke Course - RAGGAE STRUM AND LEFT HAND MUTING!!"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=q-HTQt2A56A&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=16&pp=iAQB)",
                        "title": "DAY 16 - BOB MARLEY Three Little Birds - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=-CF5svv0tJo&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=17&pp=iAQB)",
                        "title": "DAY 17 - 12 BAR BLUES - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=tsilj1X-wFM&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=18&pp=iAQB)",
                        "title": "DAY 18 - BLUES + STRUMMING - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=_9LeWRo4Hyw&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=19&pp=iAQB)",
                        "title": "Day 19 - MELODY - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=NsHMkf2Qvkw&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=20&pp=iAQB)",
                        "title": "Day 20 - CHORD MELODY - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=br3E6peXoQE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=21&pp=iAQB)",
                        "title": "Day 21 - GREENSLEEVES CHORD MELODY - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=sW_av6kqYB4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=22&pp=iAQB)",
                        "title": "DAY 22 - STAND BY ME CHORD MELODY - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=91Go1ZIiGuU&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=23&pp=iAQB)",
                        "title": "Day 23 - STAND BY ME INTERMEDIATE STRUMMING - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=RC696OAAHZ0&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=24&pp=iAQB)",
                        "title": "DAY 24 - STAND BY ME Complete Chord Melody - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=vX8EMmqmDJE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=25&pp=iAQB)",
                        "title": "Day 25 - FINGER PATTERNS - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=EIZSZTrpkzk&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=26&pp=iAQB)",
                        "title": "Day 26 - LA VIE EN ROSE CHORD-MELODY 1 - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=YubXv7T9KkA&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=27&pp=iAQB)",
                        "title": "DAY 27 - LA VIE EN ROSE CHORD MELODY Part 2 - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=C602P6kP7E4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=28&pp=iAQB)",
                        "title": "Day 28 - PLAYING BEYOND THE 4TH FRET - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=DYBrSgNQMi4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=29&pp=iAQB)",
                        "title": "Day 29 - CHORD PROGRESSIONS - 30 Day Uke Course"
                    },
                    {
                        "content": "Do the following [lesson](https://www.youtube.com/watch?v=btYPJwwFi_c&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=30&pp=iAQB)",
                        "title": "Day 30 - I CAN SEE CLEARLY NOW - 30 Day Uke Course"
                    }
                ],

                "arabic": [
                    {
                        "id": 0,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=33338&lessonName=are_cul454&linkTypeId=0)",
                        "title": "How to Make Fatteh"
                    },
                    {
                        "id": 1,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=35026&lessonName=are_cul457&linkTypeId=0)",
                        "title": "Let\u2019s Go Shopping"
                    },
                    {
                        "id": 2,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=35633&lessonName=are_geo426&linkTypeId=0)",
                        "title": "The Climate"
                    },
                    {
                        "id": 3,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=33336&lessonName=are_cul452&linkTypeId=0)",
                        "title": "Best friends"
                    },
                    {
                        "id": 4,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=26968&lessonName=are_mil426&linkTypeId=0)",
                        "title": "A Dialogue"
                    },
                    {
                        "id": 5,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=24510&lessonName=are_soc464&linkTypeId=0)",
                        "title": "My Official Documents"
                    },
                    {
                        "id": 6,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=22612&lessonName=are_soc462&linkTypeId=0)",
                        "title": "Common greeting styles and polite expressions"
                    },
                    {
                        "id": 7,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=22784&lessonName=are_sec428&linkTypeId=0)",
                        "title": "Traveling in Egypt "
                    },
                    {
                        "id": 8,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=24541&lessonName=are_ecn432&linkTypeId=0)",
                        "title": "Our New Place"
                    },
                    {
                        "id": 9,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=21829&lessonName=are_geo428&linkTypeId=0)",
                        "title": "Different Times in Egypt"
                    },
                    {
                        "id": 10,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=21957&lessonName=are_soc460&linkTypeId=0)",
                        "title": "Updating the Apartment"
                    },
                    {
                        "id": 11,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=22151&lessonName=are_soc459&linkTypeId=0)",
                        "title": "Trip to Egypt"
                    },
                    {
                        "id": 12,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20639&lessonName=are_soc455&linkTypeId=0)",
                        "title": "At the Post Office"
                    },
                    {
                        "id": 13,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20162&lessonName=are_sec427&linkTypeId=0)",
                        "title": "At the Checkpoint"
                    },
                    {
                        "id": 14,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20163&lessonName=are_cul438&linkTypeId=0)",
                        "title": "Girls\u2019 Wishes"
                    },
                    {
                        "id": 15,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20164&lessonName=are_soc454&linkTypeId=0)",
                        "title": "Flirting"
                    },
                    {
                        "id": 16,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20237&lessonName=are_sec425&linkTypeId=0)",
                        "title": "Report to the Police Station"
                    },
                    {
                        "id": 17,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20287&lessonName=are_sci430&linkTypeId=0)",
                        "title": "Health Care in Egypt"
                    },
                    {
                        "id": 18,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20288&lessonName=are_soc453&linkTypeId=0)",
                        "title": "At the Gas Station"
                    },
                    {
                        "id": 19,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20099&lessonName=are_sci431&linkTypeId=0)",
                        "title": "Clinic"
                    },
                    {
                        "id": 20,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20100&lessonName=are_cul437&linkTypeId=0)",
                        "title": "The Day of the Feast"
                    },
                    {
                        "id": 21,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20101&lessonName=are_soc449&linkTypeId=0)",
                        "title": "In the House"
                    },
                    {
                        "id": 22,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20102&lessonName=are_soc452&linkTypeId=0)",
                        "title": "An Order from McDonald\u2019s in Egypt"
                    },
                    {
                        "id": 23,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20103&lessonName=are_soc456&linkTypeId=0)",
                        "title": "At the Airport"
                    },
                    {
                        "id": 24,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20161&lessonName=are_cul441&linkTypeId=0)",
                        "title": "Basbuusa"
                    },
                    {
                        "id": 25,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19990&lessonName=are_soc446&linkTypeId=0)",
                        "title": "At the Pharmacy"
                    },
                    {
                        "id": 26,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19991&lessonName=are_soc445&linkTypeId=0)",
                        "title": "Abu Salma Restaurant"
                    },
                    {
                        "id": 27,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20017&lessonName=are_soc447&linkTypeId=0)",
                        "title": "Short Trips"
                    },
                    {
                        "id": 28,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20046&lessonName=are_cul435&linkTypeId=0)",
                        "title": "Baby Shower"
                    },
                    {
                        "id": 29,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20067&lessonName=are_env425&linkTypeId=0)",
                        "title": "A New Phenomenon in Egypt"
                    },
                    {
                        "id": 30,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20069&lessonName=are_soc448&linkTypeId=0)",
                        "title": "A Hotel"
                    },
                    {
                        "id": 31,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=20289&lessonName=are_soc457&linkTypeId=0)",
                        "title": "Egyptian Kosherie"
                    },
                    {
                        "id": 32,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19807&lessonName=are_tec426&linkTypeId=0)",
                        "title": "At The Car Dealer"
                    },
                    {
                        "id": 33,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19907&lessonName=are_cul434&linkTypeId=0)",
                        "title": "My Family"
                    },
                    {
                        "id": 34,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19908&lessonName=are_soc444&linkTypeId=0)",
                        "title": "A Shopping List"
                    },
                    {
                        "id": 35,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19909&lessonName=are_sec426&linkTypeId=0)",
                        "title": "Catch a Thief"
                    },
                    {
                        "id": 36,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=51622&lessonName=are_ecn430&linkTypeId=0)",
                        "title": "At the Bank"
                    },
                    {
                        "id": 37,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=51574&lessonName=are_geo427&linkTypeId=0)",
                        "title": "Landmarks in the City"
                    },
                    {
                        "id": 38,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19935&lessonName=are_cul433&linkTypeId=0)",
                        "title": "Wedding Invitation"
                    },
                    {
                        "id": 39,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19227&lessonName=are_cul427&linkTypeId=0)",
                        "title": "A Day in Khan El Khalili"
                    },
                    {
                        "id": 40,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19230&lessonName=are_sci427&linkTypeId=0)",
                        "title": "Obesity"
                    },
                    {
                        "id": 41,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19246&lessonName=are_tec427&linkTypeId=0)",
                        "title": "Auto Dealership"
                    },
                    {
                        "id": 42,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19434&lessonName=are_soc437&linkTypeId=0)",
                        "title": "A Phone Conversation"
                    },
                    {
                        "id": 43,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19435&lessonName=are_ecn428&linkTypeId=0)",
                        "title": "That New Store"
                    },
                    {
                        "id": 44,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19436&lessonName=are_soc438&linkTypeId=0)",
                        "title": "A Lovely Day"
                    },
                    {
                        "id": 45,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19473&lessonName=are_soc439&linkTypeId=0)",
                        "title": "Celebration"
                    },
                    {
                        "id": 46,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19637&lessonName=are_soc436&linkTypeId=0)",
                        "title": "Party"
                    },
                    {
                        "id": 47,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19661&lessonName=are_ecn429&linkTypeId=0)",
                        "title": "An Important Interview"
                    },
                    {
                        "id": 48,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19674&lessonName=are_cul432&linkTypeId=0)",
                        "title": "Dinner"
                    },
                    {
                        "id": 49,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19675&lessonName=are_soc440&linkTypeId=0)",
                        "title": "Matchmaker"
                    },
                    {
                        "id": 50,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19676&lessonName=are_sci429&linkTypeId=0)",
                        "title": "How Do You Feel?"
                    },
                    {
                        "id": 51,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19778&lessonName=are_soc443&linkTypeId=0)",
                        "title": "Egyptian Postal Services"
                    },
                    {
                        "id": 52,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19779&lessonName=are_soc441&linkTypeId=0)",
                        "title": "At the Market"
                    },
                    {
                        "id": 53,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19806&lessonName=are_soc442&linkTypeId=0)",
                        "title": "An Outstanding Student"
                    },
                    {
                        "id": 54,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=18978&lessonName=are_soc430&linkTypeId=0)",
                        "title": "Al Horia Mall"
                    },
                    {
                        "id": 55,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=19053&lessonName=are_soc429&linkTypeId=0)",
                        "title": "Graduation Ceremony"
                    },
                    {
                        "id": 56,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=17991&lessonName=are_soc427&linkTypeId=0)",
                        "title": "The Center for Youth and Sports"
                    },
                    {
                        "id": 57,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=17796&lessonName=are_sci425&linkTypeId=0)",
                        "title": "Visiting a Doctor\u2019s Clinic"
                    },
                    {
                        "id": 58,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=17934&lessonName=are_soc426&linkTypeId=0)",
                        "title": "Describing My Family"
                    },
                    {
                        "id": 59,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=35630&lessonName=are_ecn425&linkTypeId=0)",
                        "title": "Apartment for Sale"
                    },
                    {
                        "id": 60,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=24652&lessonName=are_cul444&linkTypeId=0)",
                        "title": "Flirting, Part 2: First Date"
                    },
                    {
                        "id": 61,
                        "content": "Do [this lesson](https://gloss.dliflc.eduhttps://gloss.dliflc.edu/LessonViewer.aspx?lessonId=24869&lessonName=are_soc466&linkTypeId=0)",
                        "title": "Happy New Year"
                    },
                    {
                        "id": 101,
                        "content": "Test each of these Fingerpicking Patterns at least once, switching between C, F and G",
                        "title": "Fingerpicking Patterns"
                    }
                ]
            },
            units: []

        }
    },

    actions: {
        addTopic(topic) {
            this.topics[topic] = []
        }
    },
    persist: true,
}
)