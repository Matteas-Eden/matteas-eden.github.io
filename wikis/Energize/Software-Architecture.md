# Software Architecture

### Object Oriented Design
*Energize* follows a top-down design approach with regards to the class layout. At the highest level, there exists a system of FXML files and controllers that describe the behaviour of the menu system. From here, the Game class is instantiated and loads all of the elements present in the game, using a composition relationship. This includes the map, the player, the enemies, the items, the HUD and the controller for the Pause Menu. The Pause Menu controller determines the behaviour of the pause menu and menus contained within it, such as the Save Map dialog and the Inventory menu. However, each menu is also a child of the Pause Menu, following a composite design pattern.

### Effective Management of Cohesion and Coupling
In order to keep cohesion high and coupling low, we worked hard to make sure that each and every class was focused and purposeful in its function. By taking a modular approach when writing the functionality of each class, cohesion was kept high as each class had a uniquely defined role in the project. To assist in keeping cohesion high, it was imperative to create a Utilities class to consolidate repeated functionality and reduce code repetition. This modularity also assisted in keeping coupling low, which became especially important for the implementation of the online multiplayer component, as this allowed multiple instances of our player class to be created without relying heavily on other elements of the game, or requiring those classes to be modified.

### Iterative and Incremental Development
All projects are in a constant state of flux and programming projects are no exception to this, especially with regards to game development. Throughout the development cycle, there were countless details that needed to be accounted for, which meant going back and modifying the same classes repeatedly until each and every aspect was as correct as we could make it. Such details included everything from the colours of UI elements to the bounding boxes of enemies, and these needed to be refined through constant testing.
Games are made up of many building blocks, with the final release of *Energize* being no exception at roughly 50 classes. So, it is imperative that when developing such a large project that a bottom-up approach is taken. There needs to be walls in a level before we can check collisions, there needs to be enemies before we can attack them and although these are obvious statements they must be kept in mind during development. 