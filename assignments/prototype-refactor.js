/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//GameObject Constructor
// function GameObject(opt){
//     this.createdAt = opt.createdAt;
//     this.name = opt.name;
//     this.dimensions = opt.dimensions;
//   }

//GameObject Methods

//   GameObject.prototype.destroy = function(){
    //     return `${this.name} was removed from the game.`;
    //   }
    
    //ES6
    //   const destroy = prototype => `${this.name} was removed from the game.`;
    //   console.log(GameObject.prototype.destroy());
    
    /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
    */
   
   //CharacterStats Constructor
   //   function CharacterStats(stats){
       //     GameObject.call(this, stats);
       //     this.healthPoints = stats.healthPoints;
       //   }
       
       //CharacterStats Methods
       //Inheritance with GameObject's prototype
       //   CharacterStats.prototype = Object.create(GameObject.prototype);
       //   CharacterStats.prototype.takeDamage = function () {
           //     return `${this.name} took damage.`;
           //   }
           /*
           === Humanoid (Having an appearance or character resembling that of a human.) ===
           * team
           * weapons
           * language
           * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
           * should inherit destroy() from GameObject through CharacterStats
           * should inherit takeDamage() from CharacterStats
           */
          
          //Humanoid Constructor
          //   function Humanoid(humanoidOpt){
              //     CharacterStats.call(this, humanoidOpt);
              //     this.team = humanoidOpt.team;
              //     this.weapons = humanoidOpt.weapons;
              //     this.language = humanoidOpt.language;
              //   }
              
              
              //ES6
              class GameObject{
                  constructor(opt){
                      this.createdAt = opt.createdAt;
                      this.name = opt.name;
                      this.dimensions = opt.dimensions;
                      this.destroy = function(){
                            return `${this.name} was removed from the game.`;
                        }
                    }
                }


                //ES6
                class CharacterStats extends GameObject {
                    constructor(stats){
                          super(stats)
                        this.healthPoints = stats.healthPoints;
                    }
                    takeDamage () {
                        return `${this.name} took damage.`;
                    }
                    greet(GameObject){
                        return `${GameObject.name} offers a greeting in ${GameObject.language}`
                    }
                }
                class Humanoid extends CharacterStats {
                    constructor(humanoidOpt){
                        super(humanoidOpt)
                        this.team= humanoidOpt.team;
                        this.weapons = humanoidOpt.weapons;
                        this.language = humanoidOpt.language;
                      }
                      greet (){
                          return `${this.name} offers a greeting in ${this.language}.`;
                      }
                      
                  }
                
                //Humanoid Methods
                //   Humanoid.prototype = Object.create(CharacterStats.prototype);
                //   Humanoid.prototype.greet = function(){
                    //     return `${this.name} offers a greeting in ${this.language}.`;
                    //   }
                    
                    
                    const mage = new Humanoid({
                        createdAt: new Date(),
                        dimensions: {
                            length: 2,
                            width: 1,
                            height: 1,
                        },
                        healthPoints: 5,
                        name: 'Bruce',
                        team: 'Mage Guild',
                        weapons: [
                            'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

