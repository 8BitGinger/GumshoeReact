import React from 'react';

const StoryTeller = () => {
  return (
    <>
      <div className="overlay spacer" id="top">
        <section className="container">
          <h1>
            <img
              id="iconST"
              className="page-top"
              src="src/assets/images/penrosev1.png"
            />
            Story Tellers
          </h1>

          <nav className="nav-bar">
            <ul>
              <li>
                <a href="./app.html">Home</a>
              </li>
              <li>
                <a href="#clues">Clues</a>
              </li>
              <li>
                <a href="#combat">Combat</a>
              </li>
              <li>
                <a href="#gameplay">Gameplay</a>
              </li>
              <li>
                <a href="#neoncity">Neon City</a>
              </li>
              <li>
                <a href="#downloads">Downloads</a>
              </li>
            </ul>
          </nav>

          <h3 id="clues">Clues</h3>

          <article className="card column">
            The key is knowing your audience. Seasoned gumshoes can sniff out a
            red herring from a mile away, so you gotta get creative with your
            misdirection. Plant false leads that shimmer with possibility, dead
            ends that feel tantalizingly close to the truth. But remember,
            there's a fine line between challenge and confusion. A good mystery
            is a puzzle, not an enigma. So, dole out the clues with a steady
            hand, whispers in the night, a cryptic inscription on a crumpled
            matchbook. Let your players connect the dots, their "Aha!" moments
            sweeter for the struggle. Because in the end, the thrill of the
            chase is half the fun. Just make sure they have enough moonlight to
            follow the trail, but not enough to see the whole picture at once.
            That's where the real magic happens, in the shadowy space between
            knowing and not knowing, where your players become detectives, not
            just pawns on your twisted game board.
            <div className="card-photo">
              <img
                src="src/assets/images/audience.jpg"
                alt="group of citizens"
              />
            </div>
          </article>

          <article className="card column">
            <img src="../assets/clues.jpg" alt="man showing clues" />
            You will have to present clues for the players to follow. It's a
            tough balance to find the right difficulty level for your clues,
            hidden items, and red herrings. Nothing hurts more than your players
            completely unable to solve or progress the game and it's very
            frustrating for them to have everything handed to them. Work with
            your players to find the right balance. Every Investigation gives
            the players a Clue Token. After collecting 4 Tokens the players can
            cash them in to get a piece of the bigger picture!
            <br />
            <br />
            Discovering Clues is based on a Percentile 2 D10 or 1 D100 Roll +
            Investigation Skill Bonus':
            <br />
            Unmissable Clue - 0 - 25%
            <br />
            Easy Clue - 26 - 50%
            <br />
            Moderate Clue - 51 - 75%
            <br />
            Hard Clue - 76 - 100%
            <br />
            <br />
            Don't forget the Red Herring. Red Herrings are clues specifically
            designed to point the player in the WRONG direction. They can be fun
            and add a lot of depth to your story, but be careful not to overuse
            them. They can be very frustrating for your players.
          </article>

          <h3>Follow the C.L.U.E.s!</h3>

          <ul className="clue">
            <div className="row">
              <img
                className="footsteps"
                src="../assets/footsteps.png"
                alt="footsteps"
              />
            </div>
            <article className="card">
              <li>
                ☙ <span className="highlight">C</span>hallenging
              </li>
              <p>
                Make it a Challenge!
                <br />
                <br />
                This ain't no kiddie's playground. The scenarios thrown at you
                will twist your gut, leaving you questioning every shadow and
                second-guessing every move. It'll take more than bravado and a
                lucky break to crack these cases. You'll need to think like a
                chess grandmaster, ten steps ahead, your crew working in sync
                like a well-oiled gat. Remember, teamwork makes the dream work,
                and in Neon City, dreams are what keep you alive. So, partner
                up, sharpen your wits, and get ready to earn your stripes.
                <br />
                <br />
                Because in this town, only the toughest, smartest, and most
                resourceful gumshoes walk away clean.
              </p>
              <li>
                ☙ <span className="highlight">L</span>imits
              </li>
              <p>
                Set Limits!
                <br />
                <br />
                Improvise, adapt, and overcome, partner. Crack a safe with a
                hairpin and a pack of gum? Sure, why not. Bribe a crooked cop
                with a well-placed punch and a whispered promise? Go for it.
                Just remember, anything goes in Neon City, as long as it gets
                the job done. And if you manage to pull off a feat of pure,
                unorthodox brilliance? Well, let's just say there might be some
                unique rewards waiting for you. Maybe a rare intel tip, a
                top-of-the-line weapon, or even a favor from someone unexpected.
                So, ditch the rulebook, hone your street smarts, and get ready
                to show Neon City what you're made of.
                <br />
                <br />
                After all, in this town, the only limit is your imagination.
              </p>
              <li>
                ☙ <span className="highlight">U</span>ncover
              </li>
              <p>
                Uncover the Truth!
                <br />
                <br />
                Forget spoon-fed answers, gumshoe. Neon City's secrets are
                buried deep, hidden in the shadows and whispers of its
                inhabitants. You won't find the truth neatly wrapped in a bow,
                waiting to be untied. No, you gotta earn it. Pound the pavement,
                shake down every two-bit crook and double-crossing dame you can
                find. Scour crime scenes for clues, their whispers faint as a
                dying cigarette lighter in the rain. Decipher cryptic messages,
                their meaning as tangled as a dame's web of lies.
                <br />
                <br />
                Because in Neon City, the truth is waiting to be found, but it
                might just cost you more than you bargained for.
              </p>
              <li>
                ☙ <span className="highlight">E</span>xictement
              </li>
              <p>
                Keep it Exciting!
                <br />
                <br />
                Forget static shootouts and cookie-cutter characters, gumshoe.
                Neon City throws curveballs like a drunken sailor on a bender.
                Every encounter is a gamble, a dance with danger that could
                erupt into a heart-stopping shootout or a tense standoff
                drenched in sweat and suspicion. The NPCs you meet ain't
                cardboard cutouts, either. They've got their own agendas, their
                own secrets, and their own ways of playing the game. We ain't
                promising happily-ever-afters in Neon City, but we guarantee you
                one thing: an experience you won't forget.
                <br />
                <br />
                So, light your cigarette, pull your fedora low, and step into
                the neon abyss. It's gonna be a hell of a night.
              </p>
            </article>
            <div className="row reverse">
              <img
                className="footsteps"
                src="../assets/footsteps.png"
                alt="footsteps"
              />
            </div>

            <div className="btn-holder">
              <a href="#top">
                <button id="topBtn" className="btn btn2">
                  Back to Top
                </button>
              </a>
            </div>
          </ul>

          <h3 id="combat">Combat</h3>

          <h2>Turn Order and Combat</h2>

          <article className="card column">
            Combat can be the heart-pounding crescendo, the bullet-dodging
            ballet under a hail of gunfire. But just like a jazz solo, too many
            bars and it turns into a cacophony, too few and you lose the rhythm.
            Finding the sweet spot for fisticuffs depends on your story, a
            delicate dance between the players and the perils you throw their
            way.
            <br />
            <br />
            Turn order starts with whoever initiates combat. It is then
            clockwise around the table. When it gets to the Story Teller he will
            roll for the NPC's.
            <img src="../assets/gangsters.jpg" alt="gangsters at desk" />
          </article>

          <h2>Attack & Defense Rolls</h2>

          <article className="card column">
            <img src="../assets/combat.jpg" alt="gangsters posing with guns" />
            Combat is based on Attack & Defense Rolls.
            <br />
            <br />
            The Attack Roll is based on the dice value of the Attack for player
            or NPC.
            <br />
            <br />
            The damage of the attack is based on the weapon.
            <br />
            <br />
            The Attacker begins by rolling the Attack Dice. The Defender then
            rolls the Defense Dice.
            <br />
            <br />
            If the Attack Roll is higher than the Defense Roll, the attack is
            successful and the damage is applied.
            <br />
            <br />
            If the Defense Roll is higher than the Attack Roll, the attack is
            blocked or dodged. Ties always go to defense.
          </article>

          <h2>Critical Hits / Defends</h2>

          <article className="card column">
            CRITICAL HITS/DEFENDS
            <br />
            There are a few exceptions to a successful hit.
            <br />
            <br />
            If the attacker rolls a 1, it is a critical miss and the attack not
            only fails, but such a mishap, such as a misfiring gun or dropping
            their knife. If the defender rolls the highest possible defense, it
            is a critical block and the attack is not only blocked or dodged,
            but they gain an attack of Opportunity.
            <br />
            If the player Attack is higher than the players, but the player
            rolls Critical Dodge then it is still considered a miss!
            <br />
            <br />
            ATTACK OF OPPORTUNITY
            <br />
            When a player gains an Attack of Opportunity they automatically get
            the very next attack to the opponent who they critically dodged.
            After the attack/defense rolls it returns to standard turn order.
            <img src="../assets/critical2.png" alt="d20" />
          </article>

          <h2>Death and Injury</h2>

          <article className="card column">
            <img src="../assets/death.png" alt="death logo" />
            DEATH AND INJURY
            <br />
            <br />
            Here a bad decision can leave you stiffer than a rigged poker deck.
            Here is how Death and Injury work in Gumshoe:
            <br />
            <br />
            If a player reaches 0 HP they are considered incapacitated.
            <br />
            <br />
            If they reach -5 HP they are considered mortally wounded and will
            die in 1D4 rounds, unless attended to.
            <br />
            <br />
            If they reach -10 HP they are considered dead.
            <br />
            <br />
            They can be healed with Medical Skill Checks or First Aid Kits.
          </article>

          <article className="card column">
            Neon City ain't kind to the careless, chum. Take a wrong turn down a
            dark alley or rub the wrong dame the wrong way, and you might just
            find yourself pushing up daisies (or worse, feeding the fishes in
            the harbor). But hey, that's the beauty of this game, right?
            <br />
            <br />
            The Storyteller, yourself, gets to decide if your story ends with a
            whimper or a bang. Maybe a mysterious stranger with a shady past
            shows up to offer a second chance (for a hefty price, of course). Or
            perhaps it's time to introduce a new face to the neon jungle, my
            goal ain't to send you packing – it's to tell a story where every
            choice has consequences, some deadlier than others.
            <img
              className="upside-down"
              src="../assets/death.png"
              alt="skull and crossbones"
            />
          </article>

          <h2>Loot</h2>

          <article className="card column">
            <img src="../assets/gear.png" alt="antique spy gear" />
            Every win brings rewards. <br />
            <br />
            Just remember, the bigger the score, the bigger the risk. This
            town's a two-way street.
            <br />
            Loot is earned by defeating foes, finding clues, and completing
            Missions. <br />
            <br />
            Loot Breaks down as follows:
            <br />
            <br />
            -Combat
            <br />
            --- 10 Luck Points <br />
            --- XP (based on enemy difficulty)
            <br />
            --- 1D4 Clues Token(20 needed for free clue) <br />
            --- 1 D6 dollars
            <br />
            <br />
            -Clues <br />
            --- 25 Luck Points
            <br />
            --- 100 XP
            <br />
            <br />
            -Mission
            <br />
            --- 50 Luck Points
            <br />
            --- 250 XP
            <br />
            --- 2 D10 Dollars
          </article>

          <h2>Enemy Stat Template:</h2>

          <div className="card card2">
            <div className="box2">
              Basic NPC - HP-15. <br />
              Attack - D4. Defense - D4. <br />
              XP - 10.
            </div>
            <div className="box2">
              Minor Enemy - HP-20. <br />
              Attack - D6. Defense - D6. <br />
              XP - 20.
            </div>
            <div className="box2">
              Medium Enemy - HP-30. <br />
              Attack - D8. Defense - D8. <br />
              XP - 30.
            </div>
            <div className="box2">
              Major Enemy - HP-40. <br />
              Attack - D10. Defense - D10. <br />
              XP - 40.
            </div>
            <div className="box2">
              Minor Boss - HP-50. <br />
              Attack - D12. Defense - D12. <br />
              XP - 50.
            </div>
            <div className="box2">
              Medium Boss - HP-70. <br />
              Attack - D12. Defense - D12. <br />
              XP - 70.
            </div>
            <div className="box2">
              Major Boss - HP-90. <br />
              Attack - D20. Defense - D20. <br />
              XP - 90.
            </div>
            HP = Health Points XP = Experience Points
          </div>

          <h2>Crafting NPCs</h2>

          <article className="card column">
            Bringing NPCs to life is an art, not a formula. You want them to fit
            seamlessly into the world, yet be intriguing enough to spark player
            interaction.
            <br />
            <br />
            Even the most meticulously crafted character might flop.
            Improvisation is key!
            <br />
            <br />
            Did your charming bartender fall flat? Swap them for a gruff one
            with a hidden agenda. <br />
            <br />
            Having a roster of ready-made NPCs allows you to adapt on the fly
            and keep the story flowing. <br />
            <br />
            Don't forget to assign them stats based on the Enemy Example
            Template. Key Items and specialized loot can also be dropped by
            specific NPCs to keep the story cohesive and give your players that
            extra reward!
            <img src="../assets/combat2.jpg" alt="men in fedoras" />
          </article>

          <div className="card4">
            <div className="traits2">
              Craft a more complete character by giving the NPC a unique trait:
              <br />
              <br />
              __NPC Example Traits:__
              <br />
              <br />
              • Name Dropper: This fast-talking hustler peppers every
              conversation with the names of supposed high rollers and big
              shots, hoping to impress or intimidate.
              <br />
              • Nervous Twitch: This jittery fellow can't keep his hands still,
              constantly fiddling with tools or gadgets. His nervous energy is
              both endearing and slightly unsettling.
              <br />
              • Fortuneteller: This flamboyant fortune teller makes predictions
              that are hilariously wrong, but some have an uncanny knack of
              coming true.
              <br />• Conspiracy Theorist: This grizzled veteran with believes
              the government is controlled by aliens infiltrating the city. He
              peppers his conversations with nonsensical ramblings, but
              occasionally drops a nugget of truth amidst the madness.
            </div>
          </div>

          <div className="btn-holder">
            <a href="#top">
              <button id="topBtn" className="btn btn2">
                Back to Top
              </button>
            </a>
          </div>

          <h3 id="gameplay">
            Gameplay <br />
            Skills, Actions, and Points:
          </h3>

          <h2>So how do you play?</h2>

          <article className="card column">
            <img src="../assets/barmen.jpg" alt="mysterious men at bar" />
            Gameplay is simple. <br />
            After the Character Creation the Story Teller sets the scene. Each
            player then reacts to the scene. You've already seen how combat
            works, but what about non-combat actions?
            <br />
            <br />
            The player can react to the scene in a variety of ways. For instance
            let's say they are in smokey Jazz Hall searching for Gangster. The
            Gangster runs. They can:
            <br />
            <br />
            -Command him to stop
            <br />
            -Persuade the Bouncer to help
            <br />
            -Give Chase
            <br />
            <br />
            If they try to command him to stop they would roll a Intimidate
            Skill Check and any Bonus' in Intimidation
            <br />
            <br />
            If they try to persuade the Bouncer they would roll a Persuasion
            Skill check and add any Bonus' in Persuasion.
            <br />
            <br />
            If they give chase they would roll an Athletics Skill check and add
            any Bonus' in Athletics.
            <br />
            <br />
          </article>

          <h2>Creative Actions</h2>
          <article className="column">
            <img
              id="ghost"
              className="shake"
              src="../assets/actions.png"
              alt="people performing actions"
            />
            <br />
            Creative actions can be handled in a variety of ways. Let's say the
            player wants to shoot down a banner to trap the gangster instead of
            the other examples given.
            <br />
            <br />
            Instead of rolling a complex series of rolls for example:
            <br />
            -Attack Roll for Shot
            <br />
            -Spot Check for Banner
            <br />
            -Perception Check for Gangster and so on
            <br />
            <br />
            You could simplify it by having the player roll a Percent Roll.
            <br />
            The difficulty value will be determined by Story Teller on a 1-100
            scale.
            <br />
            1-10 Being very easy and 100 being nearly impossible.
            <br />
            <br />
            So if you decide it's fairly difficult and assign a value of 75.
            Then player would roll their Percent Dice (2D10 or 1D100) and any of
            their Luck Points they wish to Apply.
            <br />
            <br />
            If they succeed the banner falls and the gangster is trapped.
            <br />
            <br />
            If they fail the banner doesn't fall and the gangster gets away.
            <br />
            <br />
            It can be as simple as that!
          </article>

          <h2>Skills</h2>
          <article className="card column">
            In the grand carnival of roleplaying, your skills are the flashy
            costumes that make your character stand out from the crowd. Just
            like a seasoned grifter wouldn't be caught dead juggling bowling
            pins, you gotta pick skills that fit your backstory like a well-worn
            fedora.
            <br />
            <br />
            Here's the deal: you start with 9 shiny skill points to dish out
            however you see fit. Maybe your character's a wisecracking detective
            with a silver tongue and a knack for picking pockets. Pump those
            points into "Persuasion" and "Sleight of Hand" and watch the
            suspects spill their guts faster than a two-dollar bottle of bootleg
            hooch.
            <br />
            <br />
            Skill Checks are performed by using a D20 and adding the appropriate
            Skill Bonus. The Story Teller will set the difficulty of the check.
            <img src="../assets/townsfolk.jpg" alt="people" />
          </article>

          <div className="row3 tray">
            <div className="left2">
              <img className="diced" src="../assets/d20.png" alt="d20" />
            </div>

            <div className="right2">
              *Max of 5 in Each Skill
              <br />
              -Athletics - For physical or acrobat manuevers
              <br />
              <br />
              -Intimidation - Intimidate Target
              <br />
              <br />
              -Persuasion - Persuade Target
              <br />
              <br />
              -Sleight of Hand - Steal Item / Hide Item
              <br />
              <br />
              -Perception - Your ability to notice things
              <br />
              <br />
              -Investigation - Your ability to find clues
              <br />
              <br />
              -Medical - Your ability to heal wounds
              <br />
              <br />
              -Driving - Your ability to pull off stunts
              <br />
              <br />
              -Deception - Your ability to lie
              <br />
              <br />
              -Diplomacy - Your ability to negotiate
              <br />
              <br />
              -Forgery - Your ability to create fake documents
              <br />
              <br />
              -Performance - Your ability to entertain
              <br />
              <br />
              -Seduction - Your ability to seduce
            </div>
          </div>

          <h2>Spending Luck and XP</h2>
          <article className="card column">
            Luck Points are a valuable resource. They can be spent to add to a
            percent roll or to reroll a roll. Players accumulate luck roll in
            the combat Section, under Loot
            <br />
            <br />
            -Percent Roll - You can spend points and them to your luck roll.
            Every 10 Luck Points apply a +1 to Percent Roll.
            <br />
            <br />
            - A player can spend 100 Luck points to re-roll an unfavorable roll.
            <br />
            <br />
            XP is earned by completing missions, defeating foes, and finding
            clues. It can be spent to increase skills or HP.
            <br />
            <br />
            - 500 XP can be spent to increase a skill by 1 point.
            <br />
            <br />
            - 2000 XP can be spent to increase HP by 5 points.
            <img src="../assets/dice-set.png" alt="dice logo" />
          </article>

          <div className="btn-holder">
            <a href="#top">
              <button id="topBtn" className="btn btn2">
                Back to Top
              </button>
            </a>
          </div>

          <section className="redirect">
            <h1 id="neoncity">
              Neon City
              <span className="font-smaller">
                <a href="./neoncity.html">Explore the Streets ↬</a>
              </span>
            </h1>

            <article className="column card">
              <img src="../assets/neoncity2.jpg" alt="neon city logo" />
              <p>
                Forget paper maps, sweetheart. This ain't your typical tourist
                trap. You wanna navigate the grimy underbelly of Neon City?
                Good.
                <br />
                <br />
                But listen close. This city ain't sunshine and lollipops.
                They're dark alleys webbed with neon, each click leading you
                deeper into the city's belly.
                <br />
                <br />
                Click the link above to Explore the Streets of Neon City!
              </p>
            </article>
          </section>

          <h2>Out of this World Ending!:</h2>

          <article className="card column">
            So, your players have cracked the case, tangled with the Rusty
            Spikes, and maybe even gotten their hands on a souped-up Skylark.
            Here's where you crank the neon to eleven and unleash the real
            mind-blower.
            <br />
            <br />
            Maybe that pulsating billboard wasn't advertising a new brand of
            cigarettes, but a message from a visitor from outerspace. The
            possibilities are as limitless as the neon sky.
            <br />
            <br />
            Leave your players blinking, bewildered, and maybe even a little
            heartbroken (in the best way possible) when they finally hang up
            their Fedoras for the long night!
            <img src="../assets/mystery.jpg" alt="alien in fedora" />
          </article>

          <div className="btn-holder">
            <a href="#top">
              <button id="topBtn" className="btn btn2">
                Back to Top
              </button>
            </a>
          </div>

          <h3 id="downloads">Downloads</h3>

          <p className="twin"></p>
          <div className="card5 skew">
            <span className="col">
              <img
                className="avatar3"
                src="../assets/gear.png"
                alt="1930s gear"
              />

              <a href="../assets/docs/NeonCity-CharSheet.pdf" download>
                ✓ Character Sheet
              </a>

              <a href="../assets/docs/NeonCity-StarterAdventure.pdf" download>
                ✓ Starter Adventure
              </a>
            </span>
          </div>

          <h3>
            Starter Adventure <br />
            <a href="../assets/docs/NeonCity-StarterAdventure.pdf" download>
              Download
            </a>
          </h3>
          <article className="card column">
            Rain slicked the chrome of my trench coat, the neon glow of Neon
            City bleeding into the puddles like spilled dreams. This dame, long
            gone and presumed dead, had resurfaced on a flimsy postcard. Her
            message, a cryptic plea for help, tugged at the ghost of what we
            once had. Neon City. A rocky hideaway where pleasure and peril
            intertwined like vipers in a heat haze. I wasn't built for sunshine
            and sand, my skills honed in the shadows of steel canyons. But a
            dame in distress? That's a case I couldn't walk away from.
            <img
              src="../assets/readme/neoncity-sepia.jpg"
              alt="neon city logo"
            />
          </article>

          <h3>Future Adventures</h3>
          <article className="card column">
            <img
              src="../assets/readme/hollywoodland-sepia.jpg"
              alt="hollywoodland logo"
            />
            The smog hung heavy over Tinseltown, a sickly yellow halo above the
            hazy dreamscape. Here, ambition dripped like sweat under the
            merciless California sun, where fortunes were made and shattered
            faster than a celluloid kiss. Dames with million-dollar smiles
            hawked their wares, and chisel-jawed fellas with steely gazes dreamt
            of the silver screen. But beneath the glitz, a darkness festered.
            Whispers slithered through back alleys, tales of things unnatural,
            of creatures from beyond the frame. Hollywoodland, they called it.
            More like Hollyweirdland, a place where the scripts got stranger
            than anything dreamed up by a drunken screenwriter. You, chum, are
            the only shamus with the guts (and the bottle) to wade through this
            celluloid nightmare.
          </article>

          <article className="card column">
            The Amazon humidity hung heavy in Rio, a suffocating cloak over the
            vibrant chaos. Christ the Redeemer, its skeletal form reaching
            towards the hazy sky, offered no solace. Here, in 1936 Rio, the
            samba pulsed with a darker rhythm. I, a weary gumshoe used to the
            grit of New York City, had arrived for some sun-drenched R&R. But
            past sins are like stray bullets, they have a way of finding you,
            even in paradise. A face from a forgotten case materialized across
            the casino floor – Frankie "The Fox" Moretti, a hood I put away back
            in '32. He shouldn't be here, breathing, radiating barely contained
            rage. Looks like my Rio vacation just took a sharp turn into a
            labyrinth of showgirls with deadly secrets, a murder threatening to
            ignite a war, and Frankie "The Fox" Moretti thirsting for revenge as
            cold as a Rio night. This dame in distress wouldn't be wearing a
            swimsuit, but a shroud.
            <img
              src="../assets/readme/riorevenge-sepia.jpg"
              alt="revenge in rio logo"
            />
          </article>

          <article className="card column">
            <img
              src="../assets/readme/russiannights-sepia.jpg"
              alt="russian nights logo"
            />
            Moscow, a frozen tomb bathed in perpetual twilight. Not exactly your
            typical tourist trap. You, a gumshoe with a nose for trouble and a
            taste for cheap vodka, were partnered with Nika Arovka, a Soviet
            ambassador with a smile too sharp and eyes like glacial ice.
            Whispers of strange men in uniforms and ancient alien devices with
            world-ending power sent you both hurtling through this frozen hell.
            Tracked once again by the Mysterious Penrose Division: you, a
            down-on-your-luck detective, and a femme fatale with buried secrets,
            were all that stood between oblivion and a world cracked open like a
            rotten egg.
          </article>

          <article className="card column">
            The last case went sideways faster than a greased getaway car. Now,
            you find yourself yanked from the familiar grime and grit and
            deposited in... well, who even knows? The Penrose Division, that's
            what they call themselves. Seems this rabbit hole runs deeper than a
            bootleg speakeasy. Multiverse travel, alternate realities, alien
            threats, the whole kit and kaboodle. All under the steely gaze of
            your new boss, April Sunday. A dame with a name that wouldn't be out
            of place in a bygone era, stuck in a world that makes yesterday's
            case look like a walk in the park. One thing's for sure, shamus: the
            gloves are off. Crack the case with the help of your new partner
            Nika Arovka, stop whatever's bleeding through the seams of reality,
            and maybe, just maybe, impress Ms. Sunday enough to learn the
            mystery that started this whole adventure!
            <img
              src="../assets/readme/multiverse-sepia.jpg"
              alt="agents of the multiverse logo"
            />
          </article>

          <div className="btn-holder">
            <a href="#top">
              <button id="topBtn" className="btn btn2">
                Back to Top
              </button>
            </a>
          </div>

          <a href="./app.html" className="btn column home">
            Back Home{' '}
          </a>
        </section>
      </div>
    </>
  );
};

export default StoryTeller;
