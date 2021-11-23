/* コピーして使う
// 通常のデータ構造
{
    layerId: 0,     //レイヤーのID
    sceneId: 0,     //シーンのID
    sceneTitle: "", //シーンのタイトル
    chapters:[      //チャプターの配列
        {
            subtitle: "",   //チャプター1のタイトル
            text: "",       //チャプター1の説明テキスト
            imageUrl: ""    //チャプター1に表示する画像のファイル名
        },
    ],

    question:{          //分岐する問いの配列
        title: "",      //問いのタイトル
        text: "",       //問いの説明テキスト
        imageUrl: "",   //問いの画像ファイル名
        choices:[       //選択肢
            {
                choiceId: 0,    //選択肢ID
                title: "",      //選択肢のタイトル
                text: "",       //選択肢の説明
                next:{          //次のシーン
                    layerId: ,  //選択したあとのレイヤーID
                    sceneId:    //選択したあとのシーンID
                }
            },
        ],
    }
},

//最後の問題のデータ構造

{
    layerId: 0,     //レイヤーID
    sceneId: 0,     //シーンID
    sceneTitle: "", //シーンタイトル
    chapters:[      //チャプターを保存する配列
        {
            subtitle: "",   //チャプター1のタイトル
            text: "",       //チャプター1のテキスト
            imageUrl: ""    //チャプター1に表示する画像のファイル名
        },
    ],
    isEnd: true,            //最後のレイヤーかどうか, 
    story:{                 //結末
        storyTitle: "",     //結末のタイトル（○○エンド）
        storyMessage: "",   //結末へのコメント
        storyQuestion: ""   //ワンポイントアドバイスやどうすればよかったかを問うためのテキスト
    },
},

*/

function importStoryList(){

    const storyListDefine = [

        //ここにデータ構造を追加していく

    ];

    return storyListDefine;

}
