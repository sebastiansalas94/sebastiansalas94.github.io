---
layout: post
title: "Supportal Combat"
subtitle: "Indirectly influencing the behavior of the AI!"
tech: Unreal Engine 5, C++, Enemy AI 
preview-video: /assets/video/SupportalCombat/SupportalCombat_Gameplay.mp4
cover-img: /assets/img/SupportalCombat/Witch_BT.png
share-img: /assets/img/SupportalCombat/Witch_BT.png
gh-repo: daattali/beautiful-jekyll
---

Supportal Combat positions the player in the supportive role of a traditional RPG party, where their abilities will indirectly affect the behavior of AI allies and enemies.

<div class="project-link-buttons">
  <a class="project-link-button itch" href="https://sebastiansalas94.itch.io/supportal-combat" target="_blank" rel="noopener noreferrer">Itch.io</a>
  <a class="project-link-button youtube" href="https://www.youtube.com/watch?v=51sCl4b1sTg" target="_blank" rel="noopener noreferrer">YouTube Trailer</a>
  <a class="project-link-button github" href="https://github.com/2Inkling-Org/Supportal-Combat" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
</div>


**Gameplay:**

Rather than being the main damage dealer, you play a support character wielding a healing circle to mend your allies, a stun to lock down enemies, and a smokescreen to disperse a group of enemies, all to help you gain the upper hand in battle. Meanwhile, you'll need to position your melee-focused ally carefully with your abilities to keep him alive, so they can land the damage needed to win.

<video autoplay loop muted playsinline style="width: 800px;">
  <source src="/assets/video/SupportalCombat/SupportalCombat_Gameplay.mp4">
</video>

**Gameplay Ability System (GAS):**

Both player and AI abilities were built using Unreal’s Gameplay Ability System, which handles cooldowns, damage/healing, casting ranges, and Visual and Sound effects. When the positioning task completes successfully for an AI, its Behavior Tree will attempt to cast an ability, if any are in range and off cooldown. Besides the player abilities, the AI enemies can melee attack and do an Area of Effect Lightning ability. 

<div class="paired-images">
  <div class="img-wrap"><img src="/assets/img/SupportalCombat/SC_1.png" alt="Supportal Combat Heal screenshot" /></div>
  <div class="img-wrap"><img src="/assets/img/SupportalCombat/SC_Stun.png" alt="Supportal Combat Stun screenshot" /></div>
</div>

**Game AI Behavior:**

The Environmental Query Service (EQS) is used to determine all positional behaviors for the AI actors. Rather than using different EQ services for each desired behavior (for example, favoring positions near low health enemies), choosing to combine multiple EQ tests into one service to score positions based on layered criteria. The base setup is to generate a simple point grid around the Querier, in this case the AI. This EQS will have multiple custom EQTs, having their own EQContexts, both made in C++, to give more flexibility to create custom classes. Contexts are basically in relation to whom they could check our tests with.

<div class="paired-images">
  <div class="img-wrap"><img src="/assets/img/SupportalCombat/EQS.png" alt="Supportal Combat EQS screenshot" /></div>
  <div class="img-wrap"><img src="/assets/img/SupportalCombat/EQS_Grid.png" alt="Supportal Combat EQS Grid screenshot" /></div>
</div>

<div class="paired-images single-image">
  <div class="img-wrap"><img src="/assets/img/SupportalCombat/Witch_BT.png" alt="Supportal Combat EQS screenshot" /></div>
</div>

**Genre:** Action Game\
**Software:** Unreal Engine, C++\
**Project Type:** Group Project\
**Development Time:** 1 Month\
**My Role:** Game Programmer, AI Engineer

**My Responsibilities:**
* Design the gameplay abilities for the player and the behavior of the enemies.
* Architected a Gameplay Ability System (GAS) framework in C++ to support modular player abilities, being able to add new actions without touching core combat code.
* Developed enemy AI using Behavior Trees and Environment Query System (EQS) to drive dynamic positioning.

This game was made for the final project of the Game AI course for my Master's in *Game Science and Design* at *Northeastern University*.

