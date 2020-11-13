/**
 * Represents any drawn non-player or non-player character entity within a game with position information (e.g. pickup, obstacle, UI element)
 * @author niall mcguinness
 * @version 1.0
 * @class Sprite
 */
class Sprite extends Actor2D {
  //#region  Fields
  //#endregion

  //#region  Properties
    get Artist(){
      return this.artist;
    }
  //#endregion

  //#region Constructors and Core methods
  constructor(id, actorType, statusType, transform2D, artist) {
    super(id, actorType, statusType, transform2D);
    this.artist = artist;
  }

  Update(gameTime) {
        //3 & 2 => 
        //0011 
        //0010 
        //----
        //0010

    if((this.statusType & StatusType.Updated) != 0)
      this.artist.Update(gameTime, this);

      super.Update(gameTime);
  }

  Draw(gameTime) {
    if((this.statusType & StatusType.Drawn) != 0)
      this.artist.Draw(gameTime, this);
  }
  //#endregion

  //#region Equals, Clone, ToString
  //to do...
  
  //deep-copy
  Clone(){
    return new Sprite(this.ID + " - clone", 
    this.ActorType,
    this.StatusType,
    this.Transform2D.Clone(), 
    this.artist.Clone());
  }
  //#endregion
}
