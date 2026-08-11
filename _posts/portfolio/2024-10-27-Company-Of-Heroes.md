---
layout: post
title: "Company of Heroes: Minimal Board Game"
subtitle: "Board Game Adaptation!"
cover-img: /assets/img/CoH/CoH_3.png
thumbnail-img: /assets/img/CoH/CoH_3.png
share-img: /assets/img/CoH/CoH_3.png
gh-repo: daattali/beautiful-jekyll
tech: Table Top Games
---

**Company of Heroes: Minimal Board Game** is an adaptation as a single-player board game of the Company of Heroes (2006) video game where the player takes the role of the Allies in the fight against the Nazis.

<div class="paired-images">
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_7.png" alt="Company of Heroes screenshot" /></div>
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_4.png" alt="Company of Heroes screenshot" /></div>
</div>

**Synopsis:**\
**Company of Heroes** gameplay focuses on controlling squads with various units in it and giving them commands to perform actions. The player should control these units to traverse the map to seize the Objectives and claim the Point of Interests while managing resources to deploy new squads as needed.

<div class="paired-images">
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_5.png" alt="Company of Heroes screenshot" /></div>
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_3.png" alt="Company of Heroes screenshot" /></div>
</div>

In our board game adaptation for Company of Heroes the gameplay is faithful. The player controls squads moving toward the objectives through a grid map with fog of war, where at any time an enemy unit can appear while traversing the map. To replicate the experience and be as faithful as possible to the original game, we created different Squads composed of different units such as Infantry, Engineers, High Maching Gun (HMG), Anti-Tank and Tanks. Also, the squads' HP is visually shown depending on how many units the board game piece has using the states functions of Table Top Simulator, as shown below.

<div class="paired-images">
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_Units.png" alt="Company of Heroes units" /></div>
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_Units_HP.png" alt="Company of Heroes unit HP" /></div>
</div>

Since this a Single-Player game, we implemented a Deck System for the player to encounter enemies randomly and have clear objectives by simulating the artificial intelligence of an enemy while also giving incentives for the player to explore the Point of Interests to get different rewards.

<div class="paired-images single-image">
  <div class="img-wrap"><img src="/assets/img/CoH/CoH_Deck_System.png" alt="Company of Heroes deck system" /></div>
</div>

**Genre:** Strategy\
**Software:** Table Top Simulator\
**Project Type:** Group Project\
**Development Time:** 3 Week\
**My Role:** Game Designer, Lead Programmer

**My Responsibilities:**
* Applied the MDA Framework to convey an experience to the player.
* Designed the dynamics, mechanics and rules for the board game.
* Implemented the Deck System to center the game around a single-player experience.
* Created the prototype in Table Top Simulator and publish it as a Workshop Mod in Steam.

This project was made for the class *Game Design and Analysis* at Northeastern University for the *MS* in *Game Science and Design*.


