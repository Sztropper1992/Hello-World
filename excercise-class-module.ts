 export class User{
    constructor(public _likes?: number, public _clicked?: boolean){

    }
    getLikes(){
        return this._likes;
    }
    getClicked(){
        return this._clicked;
    }
    click(){
        if(this._clicked===false){
            this._likes+=1;
            this._clicked=true;
            console.log("You have " + this._likes + "likes " + this.getClicked());
        }else{
            this._likes-=1;
            this._clicked=false;
            console.log("You have " + this._likes + "likes " + this.getClicked());
        }
    }
}