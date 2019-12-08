# Energize

**Project Description**

Energize (*Nocturnal Tutelage Studios*, 2019) is a clone of Legend of Zelda (*Nintendo*, 1986) created in Java using the JavaFX graphics library. Energize was made for COMPSYS 302 "Design: Software Practice" at the University of Auckland, New Zealand (not to be confused with Auckland, California).

*Energize* was created to fulfill the needs of a client who wanted their 12-year-old daughter to experience the same joy from video games that they themselves experienced when they were young. As such, *Energize* aims to deliver a enjoyable but accessible experience that is reminiscent of the arcade games of yesteryear. 

## Story
The player follows the journey of Otto, as they embark on a noble quest to save their home, the majestic city of Emberrath, by recovering the central power battery, a magical gem dubbed the Crystalshot. Otto's journey leads them to an eerie laboratory, swarming with other-worldy creatures brought to this plane by none other than Toaseth, he who stole the Crystalshot for nefarious purposes that are left unknown. By defeating Toaseth and recovering the Crystalshot, Otto will restore power and peace to the city, thus becoming a hero known to all.

## Game Features

The requirements of the project were that a player could move (and collide) within a level, move between rooms, collect items and defeat enemies, all whilst obtaining a score at the end after an encounter with a boss. In *Energize*, the player can do all of this and more.

### Adjustable Difficulty
As everyone is different in some way or another, its important to account for this in deciding on the difficulty of a game. To account for a variety of skills and abilities of prospective players, the user can choose between 3 levels of difficulty. "Easy" for those who struggle, "Hard" for those who want a challenge and "Normal" for anyone else who does not fall into either of these categories or who has not played the game before.

### Inventory & Items
There are a total of 5 unique items that the player can pick up and use during their playthrough of the game, with each one being managed by the inventory system. While the player can only equip one item at a time, they can hold an unlimited number of items in their inventory. These items have powerful effects that aid the player, such as restoring health or freezing enemies.

### Randomly Generated Levels
The layout of the map and the layout of each room (with the exception of the starting room and the boss room) are randomly generated. This obviously increases the replay value of *Energize*, as it means that no 2 playthroughs are the same since items and enemies will always be varied.

### Save & Load Maps
If a player starts a new game and they find that they particularly like the map that gets generated, then they can open up a pause menu and save it to replay later, or show to their friends.

### Minimap
In order to assist the player in navigating the - at times - quite large map and also to guide them towards the boss room, a minimap displaying current position, visited rooms and non-visited rooms can be found on the HUD.

### LAN Multiplayer
If the player is finding the game too difficult, instead of simply lowering the difficulty they can ask their friends for help. If multiple individuals with a copy of the game are connected to the same network, any one of those individuals can host a game that the others can join.

### Sound & Music
In order to enhance the enjoyment of players, appropriate background music has been added along with a host of sound effects that accompany various player actions. These include but are not limited to: sword slashes, item pickup sounds and fiery explosions.

## Software Architecture

### Object Oriented Design
*Energize* follows a top-down design approach with regards to the class layout. At the highest level, there exists a system of FXML files and controllers that describe the behaviour of the menu system. From here, the Game class is instantiated and loads all of the elements present in the game, using a composition relationship. This includes the map, the player, the enemies, the items, the HUD and the controller for the Pause Menu. The Pause Menu controller determines the behaviour of the pause menu and menus contained within it, such as the Save Map dialog and the Inventory menu. However, each menu is also a child of the Pause Menu, following a composite design pattern.

### Effective Management of Cohesion and Coupling
In order to keep cohesion high and coupling low, we worked hard to make sure that each and every class was focused and purposeful in its function. By taking a modular approach when writing the functionality of each class, cohesion was kept high as each class had a uniquely defined role in the project. To assist in keeping cohesion high, it was imperative to create a Utilities class to consolidate repeated functionality and reduce code repetition. This modularity also assisted in keeping coupling low, which became especially important for the implementation of the online multiplayer component, as this allowed multiple instances of our player class to be created without relying heavily on other elements of the game, or requiring those classes to be modified.

### Iterative and Incremental Development
All projects are in a constant state of flux and programming projects are no exception to this, especially with regards to game development. Throughout the development cycle, there were countless details that needed to be accounted for, which meant going back and modifying the same classes repeatedly until each and every aspect was as correct as we could make it. Such details included everything from the colours of UI elements to the bounding boxes of enemies, and these needed to be refined through constant testing.
Games are made up of many building blocks, with the final release of *Energize* being no exception at roughly 50 classes. So, it is imperative that when developing such a large project that a bottom-up approach is taken. There needs to be walls in a level before we can check collisions, there needs to be enemies before we can attack them and although these are obvious statements they must be kept in mind during development. 

## Issues During Development

While there were many small issues faced during the development cycle of *Energize*, there were none in particular that so massive and overwhelming that they could not be solved with a simple Google search, a couple of tutorials and a little bit of careful thought.

Upon reflection, the main issue that could be considered ever-present throughout the life of *Energize* was the large scope of the game. A demanding list of features was decided upon very early in development, however as time went on and deadlines loomed it became apparent that these self-imposed demands could not be met. As such, some initially planned features are regrettably not present in the final release of *Energize*. It was the decision to abandon some features that allowed us, as a team, to overcome the challenge we placed before ourselves and still deliver a raft of exceptional features in a brilliant package.

## Suitability Analysis

Given the wide availability of free 2D game engines, it was not a wise decision to program *Energize* in Java. It simply would have been more efficient with a software package such as GameMaker studio, Unity or Construct 2. Not only that, but with regard to Unity especially there are a much wider range of tutorials available online for creating 2D games than there is present for Java. This is due to Unity's popularity with game developers the world over, which is also yet another reason that Unity is a better choice for this project than Java, even with the additional usability of JavaFX.

On the other hand, it is worth noting that since Java is a pure Object Oriented Programming language, it does seem fit to use it as a basis for game development. This is because games can easily be reduced into distinct parts, which then interact with each other in unique and interesting ways to produce an enjoyable outcome. From such a description it is clear to see how Object Oriented design fits the bill, however it should also be noted that other OOP languages could have been used in place of Java. A notable example is C#, which is what Unity primarily supports.
