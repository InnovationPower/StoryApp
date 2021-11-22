function importStoryList(){

    const storyListDefine = [

/*== レイヤー 1 ==*/
        {
            layer: 1,
            sceneId: 1,
            sceneTitle: "ある日の昼休み...",
            chapters:[
                {
                    chapterId: 0,
                    subtitle: "クラスのみんなでドッジボール",
                    text: "4年2組のクラスでは、ドッジボールが流行っています。今日もクラスのみんなで楽しくドッジボールをしていました。",
                    imageUrl: "1.png"
                },
                {
                    chapterId:1,
                    subtitle: "お昼休みは終わり",
                    text: "お昼休みはあっという間に終わり、チャイムが鳴ってしまいました。今日はクラスメイトのそうくんのせいで負けてしまいました。",
                    imageUrl: "2.png"
                },
                {
                    chapterId:2,
                    subtitle: "誰がボールを片付ける？",
                    text: "このクラスではボールを片付ける人が決まっていません。負けてイライラしていた自分は、次のように言いました。",
                    imageUrl: "3.png"
                },
            ],

            choices:[
                {
                    choiceId: 0,
                    title: "最後にボールを持っていたたろうくん",
                    text: "いまボールを持ってるんだからそのまま片付けてほしいな",
                    nextSceneId: 1
                },
                {
                    choiceId: 1,
                    title: "ドッジボールをやろうと言った自分",
                    text: "自分で言い出したのだから、自分で片付けよう",
                    nextSceneId: 2
                },
                {
                    choiceId: 2,
                    title: "ミスをしたそうくん",
                    text: "そうくんのせいで負けたのだから、彼が片付けるべきだ",
                    nextSceneId: 3
                },
            ],
        },

/*== レイヤー 2 ==*/
        {
            layer: 2,
            sceneId: 1,
            sceneTitle: "Layer-2, Scene-1",
            chapters:[
                {
                    subtitle: "チャプター1",
                    text: "これはチャプター1です",
                    imageUrl: "1.png"
                },
                {
                    subtitle: "チャプター2",
                    text: "これはチャプター2です",
                    imageUrl: "2.png"
                },
            ],

            choices:[
                {
                    choiceId: 0,
                    title: "選択肢A",
                    text: "",
                    nextSceneId: 1
                },
                {
                    choiceId: 1,
                    title: "",
                    text: "",
                    nextSceneId: 1
                },
                {
                    choiceId: 2,
                    title: "",
                    text: "",
                    nextSceneId: 1
                },
            ],
        },

        {
            layer: 2,
            sceneId: 2,
            sceneTitle: "Layer-2, Scence-2",
            chapters:[
                {
                    subtitle: "シーン2 チャプター1",
                    text: "シーン2, チャプター1です",
                    imageUrl: "1.png"
                },
                {
                    subtitle: "subtitle",
                    text: "シーン2, チャプター2です",
                    imageUrl: "2.png"
                },
            ],

            choices:[
                {
                    choiceId: 0,
                    title: "選択肢A",
                    text: "",
                    nextSceneId: 1
                },
                {
                    choiceId: 1,
                    title: "選択肢B",
                    text: "",
                    nextSceneId: 1
                },
                {
                    choiceId: 2,
                    title: "選択肢C",
                    text: "",
                    nextSceneId: 1
                },
            ],
        },

        {
            layer: 2,
            sceneId: 3,
            sceneTitle: "title",
            chapters:[
                {
                    subtitle: "subtitle",
                    text: "text",
                    imageUrl: "url"
                },
                {
                    subtitle: "subtitle",
                    text: "text",
                    imageUrl: "url"
                },
            ],

            choices:[
                {
                    choiceId: 0,
                    title: "選択肢A",
                    text: "",
                    nextSceneId: 1
                },
                {
                    choiceId: 1,
                    title: "",
                    text: "",
                    nextSceneId: 1
                },
                {
                    choiceId: 2,
                    title: "",
                    text: "",
                    nextSceneId: 1
                },
            ],
        },

/*== レイヤー 3 ==*/

        {
            layer: 3,
            sceneId: 1,
            sceneTitle: "title",
            chapters:[
                {
                    subtitle: "subtitle",
                    text: "text",
                    imageUrl: "url"
                },
                {
                    subtitle: "subtitle",
                    text: "text",
                    imageUrl: "url"
                },
            ],

            choices:[
                {
                    choiceId: 0,
                    title: "選択肢A",
                    text: "",
                    nextSceneId: ""
                },
                {
                    choiceId: 1,
                    title: "",
                    text: "",
                    nextSceneId: ""
                },
                {
                    choiceId: 2,
                    title: "",
                    text: "",
                    nextSceneId: ""
                },
            ],
        },

    ];

    return storyListDefine;

}
