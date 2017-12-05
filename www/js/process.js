let process = {
	menu:function(){
		let content = <div><ul>
		<div className="txt">
			<li><a href='#' onClick={process.page1}>History about Softball</a></li>
			<li><a href='#' onClick={process.page2}>How to play Softball</a></li>
			<li><a href='#' onClick={process.page3}>Rules to play Softball</a></li>
		</div></ul></div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
		<img src={"img/00.jpg"}/><br/>
		<p> Softball is a variant of baseball played with a larger ball on a smaller field.
 		It was invented in 1887 in Chicago, Illinois, United States as an indoor game.
 		It was at various times called indoor baseball, mush ball, playground, softball, kitten ball, and because it was also played by women, ladies' baseball. 
		The name softball was given to the game in 1926, because the ball used to be soft. </p>
		<br/><a href='#' onClick={process.menu}>Back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
		Part 1.Understanding the Basics <br/>
		

		<img src={"img/1.jpg"}/><br/>
		<p>1. Know the difference between softball and baseball. Softball and baseball are variations of the same game. The primary difference is that a softball is pitched underhand, while a baseball is pitched overhand. As the name implies, there is also a difference in the balls used.
		Softballs are larger and a bit heavier than baseballs. Softballs are less dense and slightly softer than baseballs. Softballs are typically white but may be colored neon green or yellow in the interests of visibility (especially at night).
		Softball fields are typically smaller than baseball fields (because batted softballs don't travel as far as baseballs). Softball games last for seven innings instead of the nine innings typical of higher-level baseball games.
		The bats used in softball are a little shorter and have a wider barrel than the bats used in baseball. </p>

		<img src={"img/2.jpg"}/><br/>
		<p>2. Understand the difference between slow-pitch and fast-pitch softball. There are two types of softball competition, with slight differences between them. Both follow the same general rules.
		Slow-pitch is typically coed, and, as the name suggests, the ball is pitched by lobbing it in a high, slow arc toward home plate.
		Fast-pitch is played primarily by women and features very quick pitches with large wind-ups. </p>

		<img src={"img/3.jpg"}/><br/>
		<p>3. Know the rules. Most softball games consist of seven innings, each with two halves. The first (or "top") half is when the visiting team bats. The second (or "bottom") half is when the home team bats. Each half-inning is played until the fielding team manages to put out three batters or baserunners.
		The pitcher will pitch to a batter until one of four things happens:
		The batter gets three strikes against him/her. A strike occurs when the batter swings at a pitch but misses it (or hits it foul with less than two strikes against him/her), or when the pitch passes through the strike zone but the batter does not swing at it.
		The pitcher throws four "balls," which are pitches that fail to pass through the strike zone and which are not swung at by the batter. In this case the batter "walks," meaning s/he is awarded first base.
		The pitcher hits the batter with a pitch. In this case, too, the batter is awarded first base. (This applies only to fast-pitch softball. There is no such thing as a hit batter in slow-pitch.)
		The batter reaches base safely by virtue of a hit, a fielder's choice, or a fielding error (or rarer occurrences such as catcher's or runner's interference).
		To get a batter out, a pitcher can record three strikes against the batter, or a fielder can catch a batted fly-ball (in either fair or foul territory) before it hits the ground.
		If the batter hits a ground ball, s/he will be out at first base if a fielder can secure the batted ball and throw it to the first baseman who steps on first base before the batter can do so.
		To get a runner out, an infielder can tag the runner with the ball (or the gloved ball) while the runner is between bases.
		In the case of a "force out," a runner is forced to advance to the next base when there is nowhere else for him/her to go, and s/he may be put out by any infielder who while holding the ball steps on the base before the runner arrives there. In this case the fielder does not have to tag the runner. A force out commonly occurs when a batter hits the ball to an infielder, who throws it (or runs it) to first base before the batter can run there.
		When a batter hits a fair ball s/he may attempt to run as far around the bases as s/he thinks possible without being tagged out by the defense. Every time a runner crosses home plate, they score one “run” (or point) for their team.
		At the end of seven innings, the team with more runs wins the game. If the score is tied, the choice can be made to let the game end in a tie or play one or more extra innings until one team is ahead at the end of an inning. </p>
		
		<img src={"img/4.jpg"}/><br/>
		<p>4. Know the positions. When a team is fielding (playing defense), each player is assigned a specific position on the field. There are two general areas of the field, the infield and the outfield.
		The infield is the dirt section of the field. The infielders consist of the pitcher, catcher, first baseman, second baseman, shortstop, and third baseman.
		The outfield is the grassy section farther from home plate consisting of left, center, and right field with an outfielder stationed in each. Some leagues (particularly in slow-pitch) allow a fourth outfielder such that the positions are left, left-center, right-center and right field.
		Although the catcher and pitcher are infielders, they are specialized positions that involve added practice time, often separate from the rest of the team. </p>

		Part 2.Gathering your Equipment <br/>

      
       <img src={"img/5.jpg"}/><br/>
       <p>1. Find the right glove. When you're playing defense, you'll wear a leather glove on your non-throwing hand to help you catch thrown or batted balls.
		If you purchase a new glove, you will want to "break it in" by removing the stiffness of the new leather. There are several methods of doing this, including baking the glove in an oven with special oil applied, leaving it in the sun, or playing a lot of catch with it.
	    Playing the catcher position in fast-pitch requires a special glove. The gloves of catchers (and first basemen) are called mitts. They are made of heavier construction than the typical softball glove. </p>

	    <img src={"img/6.jpg"}/><br/>
	    <p>2. Choose a bat. Softball bats are not all the same. They must be chosen with a player’s size and strength in mind. When you look for a bat, look at three primary factors: the length, the weight, and the style.
		To find a bat that is the right length, stand up straight and hold a bat by its knob at the end. If you can hold your arm straight down, and the bat touches the ground, it is the right length for you. If you have to bend your elbow, it is too long. If the bat doesn't touch the ground, it's too short.
		To find a bat that is the right weight, look at the drop. The drop is the numerical difference between the bat's height (in inches) and its weight (in ounces). The drop will range anywhere from -8 to -12. Lighter bats (near -12), are good for weak or slow batters. Heavier bats (near -8), are best for strong batters. You can also test the suitability of the bat's weight by placing it in your throwing hand and holding it straight out in front of you. If you can easily hold it at arm's length for a full minute or more, it is not too heavy for you.
		There are two main types of softball bats available, aluminum and composite. Each type is appropriate for both beginners and experienced players, but aluminum bats are more popular. These are also available in single- or double-walled construction. Single-walled are cheaper but slightly less effective than double-walled bats. Composite bats will hit the ball farther, but they can crack easily in cold weather. </p>

		<img src={"img/8.jpg"}/><br/>
		<p>3. Purchase a batting helmet. Playing softball, especially fast-pitch, can be dangerous if you don’t take safety precautions. Most fast-pitch leagues require batters to use a caged batting helmet (pictured above), but even if they don’t, it is best to wear one when you are up to bat. </p>

	    <img src={"img/9.jpg"}/><br/>
		<p>4. Get a pair of cleated shoes. Cleats are used in several sports and give you better traction while running after a ball or between bases. For softball, rubber or plastic cleats are appropriate. Metal cleats are typically banned in softball leagues, as they pose a danger to sliding runners and infielders who try to tag them. </p>

		<img src={"img/10.jpg"}/><br/>
		<p>5. Look for additional, optional gear. These include batting gloves, which cushion the hands, protect against blisters, and improve bat grip. If you are a fast-pitch catcher, you will want to use a mask, chest protector and shin guards. Some players who frequently slide into bases choose to wear sliding pads. </p>

		Part 3.Learning Bat <br/>

		
		<img src={"img/11.jpg"}/><br/>
		<p>1. Ready your stance. When you’re up to bat it is not enough just to stand at the plate. Here are a few batting-stance tips to keep in mind every time you go up to hit:
		Keep your feet at shoulder width from each other. Place them equi-distant from home plate (unless you're trying to hit down one foul line or the other).
		Bend your knees and lean slightly toward home plate.
		Put more weight on your back leg. When you swing you will push off using your back leg for power.
		Keep the appropriate distance from the plate. To know how far away you should stand, stick your bat straight out over home plate as if you were in mid-swing. The barrel of the bat should be above the center of the plate. If not, back up or move closer to the plate. </p>

		<img src={"img/12.jpg"}/><br/>
		<p>2. Hold the bat in a comfortable grip. When you bat you should be holding the rubber grip near the knobbed end. Your throwing hand should be higher on the bat than your non-throwing hand, and your hands should be touching each other as they grip the bat.
		Line up your knuckles on the handle of the bat.
		When you take your stance the bat should be held at a slight angle from vertical above your back shoulder.
		Hold the bat with your hands near your ear. </p>

		<img src={"img/13.jpg"}/><br/>
		<p>3. Prepare to swing. Maintain your batting stance as the pitch comes toward you. Keep your knees bent and the bat positioned near your ear. </p>

		<img src={"img/14.jpg"}/><br/>
		<p>4. Swing to hit the ball. Keep the bat horizontal as it sweeps through the strike zone. Don't reach for a bad pitch. Patiently wait for a good pitch. Swinging at a bad pitch rarely results in a hit.
		Swing “shoulder to shoulder.” This means that your chin starts out near your non-throwing shoulder, and you swing all the way around so that your throwing shoulder finishes near your chin.
		Swing hard with a strong follow-through. This means to continue the swing until the bat almost touches your non-throwing shoulder. If you hit the ball, don’t drop the bat as soon as you make contact, as you will lose half of your power. Use all your strength and continue the swing until the bat has moved to the other side of your body.
		Move your feet. Most batters take a small step with their front foot toward the pitcher as they swing. The back foot normally remains planted, although you may find that you pivot on the ball of your back foot as you swing.
		An exception to the rule of keeping your back foot planted on the ground occurs if you're trying to hit to the opposite field. For instance, if a right-handed batter is trying to hit to right field, s/he may want to move her/his right foot farther from the plate just before swinging, thus facing more toward right field.
		Rotate your body with the swing. Remain flexible while you swing by twisting your torso slightly. This will add power to your swing.
		Keep your eye on the ball. Watch it all the way from the pitcher's hand to the point of contact with the bat. This will improve your chances of hitting the ball solidly.
		Once you hit the ball, softball etiquette requires that you not throw the bat. Instead, drop it as carefully as possible outside the baseline so that nobody trips over it. </p>

		<img src={"img/15.jpg"}/><br/>
		<p>5. Move toward first base once you've hit a fair ball. Your goal is to get on base safely.
		If you're not sure whether your batted ball will land in fair territory, run hard toward first base until an umpire has indicated the ball is foul. Your first-base coach will help you decide whether to stop at first base or keep running. Your job is making it safely to or beyond first base rather than watching what is happening in the outfield. That's the coach's job. </p>

		Part4. Learning to Throw

		
		<img src={"img/16.jpg"}/><br/>
		<p>1. Stretch your arms before starting to throw. Injuring your arm is easy to do if you don’t warm up your muscles first. </p>

		<img src={"img/17.jpg"}/><br/>	
		<p>2. Start by throwing to a nearby target. Although it's easy to get excited and start throwing at a target 100 feet (30.5 m) away, this is definitely not what you should do. Throwing too hard at first can increase the likelihood of injuring yourself.
		Start throwing at a target ten feet away. This may seem too close, but as your arm gets loosened up you will gradually back away from your target.
		To emphasize basics, start out by throwing from a kneeling position while holding your throwing elbow in place. This will force you to snap your wrist as you throw, a technique you should always use when throwing, because it adds power to your throw. After doing this for a while you can progress to standing.
		After every twenty or so throws you can back farther from your target. Don't back so far that you're making uncomfortably long throws repeatedly. Save that for the games. </p>	

		<img src={"img/18.jpg"}/><br/>
		<p>3. Get in the correct throwing stance. Start by standing perpendicular to your line of throw. When you begin the throw your throwing shoulder will face away from your target.
		Your feet should be level with each other and shoulder-width apart.
		To start a throw, you will probably want to hold the ball inside your glove near your chest. Keep a grip on the ball while it's in the glove. </p>

		<img src={"img/19.jpg"}/><br/>
		<p>4. Grip the ball correctly. The best way to hold the ball is with your fingertips touching a seam. </p>

		<img src={"img/20.jpg"}/><br/>
		<p>5. Wind up your arm to throw. Pull the ball from your glove, drop your arm down and back, then bring it up and around past your head to throw.
		Avoid drawing your elbow straight back as if you were pulling a slingshot or bow and arrow. This will limit the power and distance of your throw.
		Don’t worry about dropping your throwing arm all the way down your side before bringing it back and around. Wind up your arm, and use the full weight of your body to aid in making the throw. </p>

		<img src={"img/21.jpg"}/><br/>
		<p>6. Aim for your target. If you are playing catch, your target should always be your partner’s chest. This goes for game throws, too. </p>

		<img src={"img/22.jpg"}/><br/>
		<p>7. Make the throw. Bring your throwing arm down and back, and then around past the top of your head. Release the ball when your arm is fully extended in front of you. The release point depends on how high and far you want to throw. A higher release point means a higher (and longer) throw.
		You should have a strong follow-through on every throw you make. Your throwing hand should end up near the middle of your body after you have released the ball. This will help prevent you from developing a sidearm delivery and causing injury to your shoulder or elbow.
		Turn your shoulders and head toward your target on every throw. Be sure to maintain eye contact with your target. This will help direct the muscles in your body to throw where you want. Looking away can cause the ball to fly off in the wrong direction.
		Take a small step with your front foot on a short throw, a longer step for a longer throw.
		Use your gloved hand to point at your target as you wind up to throw, and then drop that arm to your side as you deliver the ball. </p>

		<img src={"img/23.jpg"}/><br/>
		<p>8. Don’t worry about speed at first. The most important part of throwing is accuracy, not speed or strength. When you are first learning, focus on simply getting the ball to your target. You'll develop speed soon enough. </p>

		Part 5. Learning to Catch

		
		<img src={"img/24.jpg"}/><br/>
		<p>1. Hold your glove properly. When you are playing catch it's important that your glove be held in front of your chest.
		Don't hold your glove with the pocket facing you or with the fingers pointing toward the ground. If you try to catch a ball like that, it could bounce up and hit you in the face.
		Don't hold your glove vertically, because if you don’t have a good grip on the ball it might pop out of your glove right after you’ve caught it.
		Hold the glove wide open so that there is room for the ball to land. If your glove is even partially closed, the ball may hit the outside of the glove and fall to the ground instead of landing inside. </p>

		<img src={"img/25.jpg"}/><br/>
		<p>2. Get in the ready position. If you are playing catch, the best position to be in is the “ready position,” with your knees slightly bent and your torso leaning slightly forward on the balls of your feet. This allows you to shuffle in any direction to catch a ball not headed straight for you.
		Keeping your feet too close together could cause you to trip or make it harder to get a good jump on a ball hit far away from you. </p>

		<img src={"img/26.jpg"}/><br/>
		<p>3. Play catch whenever you can. The best way to practice catching is simply to play catch. Practice throwing and catching in the ready position. Concentrate on holding your glove the right way.
		To start, have balls thrown toward your chest. This is the most basic catching practice and will help you to warm up.
		Squeeze the ball in your glove every time you make a catch to keep it from bouncing out of the glove. Use your throwing hand to trap the ball inside as soon as it enters the glove.
		Have your partner throw balls slowly to start before making stronger throws. This will help you get used to the contact and grip necessary to catch the ball. </p>

		<img src={"img/27.jpg"}/><br/>
		<p>4. Learn to catch grounders. A grounder is a ball hit or thrown that rolls or bounces along the ground. You catch them with a different method than balls in the air.
		Get in the ready position, but instead of holding your glove to your chest, hold it near the ground. The tips of the fingers should touch the dirt or grass to prevent the ball from rolling under the glove.
		Be ready to move to either side, as rocks or tufts of grass can cause the ball to make a sudden change in direction.
		Although your glove should be open toward the ball with the fingertips touching the ground, don’t hold it so that the ball could bounce up and hit you in the face. Keep it at a slight angle to prevent this.
		Stand up after catching a grounder to make a throw. Don’t try to make a throw from your position near the ground. </p>		

		<img src={"img/28.jpg"}/><br/>
		<p>5. Learn how to catch pop-flies. A pop-fly is a ball hit high in the air above the infield or shallow outfield.
		Hold your glove near your face.
		Move under the ball. If you need to back up, don't run backwards, because you could trip and fall. Instead turn your body so that you can run back sideways while looking up at the ball.
		Position yourself so that you don't have to reach out to catch the ball. Stand directly beneath it so that you catch it near your face. Reaching for it will increase the likelihood that the ball will bounce off or out of your glove.
		If necessary, block out the sun or field lights with your glove to help you see before making the catch.
		Bring the glove back to your chest before grabbing the ball with your throwing hand. This will help you realign your body into the proper throwing position. </p>


		<br/><a href='#' onClick={process.menu}>Back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
			<p><b>Rules</b></p><br/>
			Field, Players, and Equipment<br/>
			The Field - The baselines will be 65 feet. The distance from pitcher's mound to home plate will be 50 feet.<br/>
			The Players - A team must have 9 players to start or to continue a game with the maximum of 10 players (not including an EP - SEE LAST RULE UNDER BATTING).<br/>
			Substitutes - A player is officially in the game when his/her name has been entered on the official score sheet. Once a player leaves the line-up, he/she may re-enter the game.<br/>
			FREE SUBSTITUTION/All teams must turn in batting order. No pinch runners...only in case of injury and that player cannot return to the game.<br/>
			The captain is the only player who may address the officials during the game, but only on matters of rules interpretation.<br/>
			Equipment - No metal screws or screw-in cleats are allowed. Rings, earrings, necklaces, and bracelets are advised not to be worn. Bats must be official softball bats.<br/>
			Add-ons must be made to a roster prior to the SECOND game of Intramural softball season.<br/><br/>
			

			<p><b>Starting the Game</b></p><br/>
			The pre-game conference will consist of each captain meeting with the umpire before the game to go over ground rules.<br/>	
			Scoresheets must be filled out before the game.<br/><br/>


			<p><b>Pitching Regulations</b></p><br/>
			The pitcher must take a position with both feet firmly on the ground and with one or both feet in contact with the pitcher's plate.<br/>
			The pitch starts when the pitcher makes any motion that is part of his/her wind up. His/Her arm must come to a rest holding the
			ball in front of his/her body, with a pivot foot in contact with the pitcher's plate. This position shall be held for at least 1 second and not
			more than 10 seconds. He/She must deliver the ball on the first forward swing to the pitching arm past the hip. There must be no reserve stopping of the forward motion.
			The pitcher shall not deliberately stop, roll, or bounce the ball while in the pitching position in order to prevent the batter from striking it.<br/>
			The pitcher shall not at any time during the game be allowed to use tape or other substances upon the ball, the pitching hand, or fingers. Under supervision of the umpire, powder resin may be use to dry the hands.<br/>
			The pitch must be delivered with an arc between six and ten feet.<br/>
			"NO PITCH" shall be declared when: 1) The pitcher pitches during a suspension of play, 2) The runner is called out for leaving the base too soon, 3) The pitcher makes a quick return pitch, 4) The ball slips from the pitcher's hand during the windup or backswing, or 5) The pitching arc is lower than 6 feet or higher than 10 feet.<br/>
			At the beginning of the game or when a pitcher relieves another, no more than 5 pitches may be used as a warm up. Only 3 pitches will be allowed between innings. Play shall be suspended at this time.<br/>
			Intentional walks may be made by informing the plate umpire, no pitches are necessary.<br/>
			GAME TIME IS START TIME.<br/><br/>


			<p><b>Batting</b></p><br/>
			Each player of the side at bat shall become a batter in order in which his/her name appears on the scoresheet.<br/>
			The batter shall not hinder the catcher from fielding or throwing the ball by stepping out of the batter's box, or intentionally hindering the catcher while standing within the batter's box.<br/>
			Members of a team at bat shall not interfere with a player attempting to field a foul fly ball.<br/>
			A strike is called by the umpire for each legally pitched ball hitting the strike zone mat and the batter does not swing, and for each pitched ball swung at and missed by the batter. This includes pitches the umpire has already declared "NO PITCH".<br/>
			A ball is called by the umpire for each pitched ball which does not hit the strike zone mat or touches the ground before reaching home plate and is not swung at by the batter, and for each illegally pitched ball.<br/>
			A foul tip is a batted ball which goes directly from the bat to the catcher's mitt or hand and is legally caught by the catcher. The batter is not out unless the ball goes above the batter's head before being caught or it is the third strike.<br/>
			The batter gives up all rights if he swings at an illegal pitch.<br/>
			If an Extra Player (EP) is used, all 11 on the starting line-up must bat and any 10 of those 11 may play defense.<br/>
			Only ASA approved slow pitch softball bats are allowed in league and tournament play.  Baseball bats are illegal, and if a team is found using one the player(s) found using the bat will be ejected.<br/>
			When an over the fence homerun is hit, the batter and all base runners may go directly to dugout. Appeals for runners missing a base are not allowed. This speeds up the game as batters and runners do not have to run the bases.<br/><br/>
					

			<p><b>Protest</b></p><br/>
			Protests shall not be received or considered if they are based solely on a decision involving the accuracy of judgement on the part of an umpire.<br/>
			The Supervisor on duty must be notified at the time of the protest.<br/>
			Formal protest must be written and turned into the Intramural Office within 24 hours after the game, but no sooner than 6 hours after the contest. See Intramural Recreational Sports Handbook for more details.<br/><br/>
					

			<p><b>Balls and Strikes</b></p><br/>	
			Balls constitute a walk.<br/>
			Strikes constitutes an out (strike out).<br/>
			If the batter has a foul after receiving the second strike, the batter is out.<br/>
			Each batter will start with a 1 ball/1 strike count.<br/><br/>
					

			<p><b>Player Conduct</b></p><br/>	
			Anyone involved in a fight will be suspended for the remainder of the softball season and possible further disciplinary action, if necessary.<br/>
			Any player ejected from 2 games in the season is suspended for the remainder of the season and possible further disciplinary action, if necessary.<br/>
			Any player pushing, shoving, disrespecting, etc. an umpire will be ejected from the game. Refer to the Intramural Recreational Sports Handbook for further penalties.<br/><br/>
					

			<p><b>Definitions</b></p><br/>
			Appeal Play - A play upon which an umpire cannot make a decision until requested by a player. The appeal must be made before the next ball is delivered to the batter.<br/>
			Base Path - An imaginary line three feet to either side or direct line between the bases.<br/>			
			Batter's Box - An area to which the batter is restricted while in position with the intention of helping his/her team to obtain runs.<br/>
			Batter/Baserunner - A player who has finished his/her turn at bat, but has not yet been put out or touched first base.<br/>
			Bunt - An ILLEGALLY tapped ball not swung at, but intentionally met with the bat and tapped slowly within the infield.<br/>
			Catcher's Box - An area which the catcher must stand while and until the pitcher delivers a pitched ball.<br/>
			Dead Ball - Ball is not in play and is not considered in play again until the pitcher is within 8 feet of the pitcher's mound and the umpires has called "Play Ball".<br/>
			Fair Ball - Any batted ball which settles on fair territory between home and first base or home and third base; or that is on or over fair territory including any part of first and third base when traveling to the outfield; or that touches any of the bases; or if it touches any person (player or umpire); or that passes out of the playing field beyond the outfield fence.<br/>
			Foul Tip - A foul ball which goes directly from the bat, not higher than the batter's head, to the catcher's hand and is legally caught.<br/>
			Illegally Caught Ball - Occurs when a fielder catches a batted or thrown ball with his/her cap, glove, or any part of his/her uniform while it is detached from his/her proper place.<br/>
			In Jeopardy - A term indicating that a ball is in play and an offensive player may be put out.<br/>
			Infield Fly Rule - A fair, hit ball, other than a line drive, that is caught or in the opinion of the umpire could be easily handled by an infielder. Players must be on first and second base (or bases loaded) with less than 2 outs.<br/><br/>
			Obstruction - The act of a fielder, while not in possession of the ball or in the act of fielding a batted ball, which impedes the progress of a base runner who is legally running bases.<br/>
			Out of Play - A ball that has gone past the out of play boundary lines.<br/>
			Pivot Foot - The foot which the pitcher must keep in contact with the pitcher's plate until the ball is delivered.<br/>
			Play Ball - The term used by the umpire to indicate that play shall begin or resume.<br/>
			Sacrifice Fly - A fair fly ball which enables any runner to advance or enables a runner to score, but which results in the batter/runner to be out.<br/>
			Time - Term used by the umpire to order the suspension of play.<br/><br/>
					

			<p><b>Miscellaneous</b></p><br/>
			Games consist of 7 innings.<br/>
			The game will be called at the completion of the 3rd inning if one team is ahead by 20runs, in the 4th inning if a team is ahead by 15 runs, and in the 5th inning if a team is ahead by 10 runs. If the home team is ahead at the middle of the inning and the above scenarios exist then the game is over.<br/>
			There is a 50 minute time limit.<br/>
			Bunting and stealing are not permitted.<br/>
			Rainouts will be rescheduled at the end of the regular season if possible.<br/>
			Each team is responsible for providing a scorekeeper. The home team will keep the official score. The umpire will make the final decision on any discrepancies of the score.<br/>
			The catcher is recommended to wear a mask.<br/>
			No infield practice will be allowed after the first inning.<br/>
			Runners may not leave the base until the ball has been struck by the batter.<br/>
			Games will be canceled by 4:00 p.m. the day of the game.<br/> 
			Bring your own gloves and bats, balls will be provided.<br/>
			Each runner is allowed one base if a fielder catches a fly ball in fair or foul territory but carries it out of bounds.<br/>				
			When a ball is ruled out of play, all baserunners will be awarded two bases, the base he/she is running to at the time of the throw and the following base.<br/>
			If a play is close (i.e. force out at second), then the baserunner MUST slide except for running to first base. (no longer a rule)<br/>
			A forfeit will constitute a 6 point differential (changed to 6-0 with the new forfeit policy)<br/>
			No artificial noise-makers are allowed.<br/><br/>


		<br/><a href='#' onClick={process.menu}>Back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	
	loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},5000);