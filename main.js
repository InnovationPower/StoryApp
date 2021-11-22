const app = new Vue({

    el: "#app", //Vueを適用する範囲を定義（今回は <div id="app"></div>の中に適用）
    data: {     //使いたい変数や配列などを定義する    
        storyList: [],
        currentLayer: 1,
        currentStoryid: 0,
        currentLayerStoryList:[],
        currentStoryData: [],
        currentChapterId: 0,
        isChoiceButtonShow: false
    },

    mounted() {
        //外部ファイルに保存しているストーリーデータを取得する
        this.storyList = importStoryList();
        
        //初回のデータを取得する
        this.currentLayerStoryList = this.getCurrentLayerStoryData(1);
        this.currentStoryData = this.currentLayerStoryList[0];
    },

    methods: {

        getCurrentLayerStoryData(layerId){
            const targetDatas = this.storyList.filter((v) => v.layer === layerId); 
            return targetDatas;
        },

        prevButtonClicked(){

            if(this.currentChapterId > 0){
                this.currentChapterId -= 1;
            }
        },

        nextChapterButtonClicked(){
            if(this.currentStoryData.chapters.length > this.currentChapterId + 1){
                this.currentChapterId += 1;  
            }else{
                console.log("error");
            }
        },

        choiceButtonClicked(nextSceneId){

            //登録されているレイヤー数を超えていないかどうかチェック
            const maxLayerNum = this.storyList.reduce((a,b)=>a.layer>b.layer?a:b).layer;
            if(maxLayerNum > this.currentLayer){
                this.currentLayer += 1;
            }

            //次のデータを取得する
            const nextLayerStoryList = this.getCurrentLayerStoryData(this.currentLayer);


            //選択されたシーンを取得
            this.currentStoryData = nextLayerStoryList.find((v)=> v.sceneId == nextSceneId);
            this.currentChapterId = 0;


        
        }    
    },



    watch:{
        currentChapterId:function(newVal, oldVal){

            console.log(oldVal);
            console.log(newVal);

            if(this.currentStoryData.chapters.length == newVal+1){
                //その場面の最終チャプターである
                this.isChoiceButtonShow = true;

            }else{
                this.isChoiceButtonShow = false;
            }

        }
    }

})