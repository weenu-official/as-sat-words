// Digital SAT style "Words in Context" questions for A's SAT Words.
// Units 1-3: original short passages. Units 4-35: the app's own example sentences with the word blanked.
// Format: word -> [{t: text with ______, o: [answer, distractor, distractor, distractor], why: explanation}]
// The first option is always the answer; the app shuffles the order.
window.SATQ = {
"unimportant": [
 {t:"For decades, biologists treated the long stretches of DNA that do not code for proteins as ______, calling them \"junk.\" Recent studies, however, show that many of these regions help control when genes switch on and off.",
  o:["unimportant","indispensable","recognizable","vigorous"],
  why:"Calling the DNA \"junk\" shows that scientists thought it had little significance; \"however\" signals that this view later changed."},
 {t:"In her notebook, the novelist recorded details that might seem ______ to anyone else: the color of a neighbor's gate, the price of bread. Years later, those small observations gave her fiction its convincing sense of place.",
  o:["unimportant","conclusive","lucrative","infallible"],
  why:"The examples are small, everyday details that most people would consider insignificant, yet they proved valuable later."}
],
"comparable": [
 {t:"The two telescopes were built decades apart and use entirely different mirrors. Even so, tests show that the images they produce are ______ in sharpness, differing by less than one percent.",
  o:["comparable","atypical","inaccessible","arbitrary"],
  why:"\"Even so\" and \"differing by less than one percent\" show that the images are roughly equal in quality."},
 {t:"Economists caution against assuming that wages in the two cities are ______. Although the average salaries look similar, housing in one city costs nearly twice as much, so the same paycheck buys far less.",
  o:["comparable","tedious","implicit","spontaneous"],
  why:"The salaries only \"look similar\"; the warning is against treating them as truly equivalent."}
],
"recognizable": [
 {t:"After two centuries underwater, the ship's wooden hull had almost entirely rotted away. Only the iron anchor remained ______, its familiar shape still clear beneath a thin layer of coral.",
  o:["recognizable","lucrative","communicative","superfluous"],
  why:"A \"familiar shape\" that is \"still clear\" is one that can easily be identified."},
 {t:"The composer's style is so ______ that listeners can often identify her work within a few seconds: sudden silences, followed by a single low note on the cello.",
  o:["recognizable","obscure","tedious","precarious"],
  why:"Listeners can \"identify her work within a few seconds,\" so the style is easy to recognize."}
],
"infallible": [
 {t:"Early users trusted the navigation software as if it were ______. That confidence faded after the program directed several drivers onto a road that had been closed for years.",
  o:["infallible","atypical","unintelligible","consequential"],
  why:"Users trusted the software completely, as though it could not make mistakes, until it made an obvious one."},
 {t:"The historian reminds readers that eyewitness accounts are not ______: memories fade, and people often describe what they expected to see rather than what actually happened.",
  o:["infallible","unimportant","comparable","elaborate"],
  why:"Fading memories and mistaken descriptions are reasons that eyewitnesses can be wrong, so their accounts are not free of error."}
],
"inspect": [
 {t:"Before any bridge in the state reopens after an earthquake, engineers must ______ every support cable by hand, looking for cracks too small to appear in photographs.",
  o:["inspect","depict","circulate","reciprocate"],
  why:"\"Looking for cracks\" by hand describes examining something closely to find problems."},
 {t:"Customs officers at the port do not have time to ______ each of the thousands of containers that arrive daily. Instead, they examine a small sample chosen by a risk-scoring program.",
  o:["inspect","conceive","elevate","cultivate"],
  why:"\"Instead, they examine a small sample\" restates the blank: officers cannot closely check every container."}
],
"elevate": [
 {t:"Because the river floods nearly every spring, builders in the delta ______ new houses on concrete posts, keeping the living areas two meters above the ground.",
  o:["elevate","accumulate","disengage","speculate"],
  why:"Houses kept \"two meters above the ground\" have been raised to a higher position."},
 {t:"Critics once dismissed quilting as a mere household craft. A 2002 museum exhibition helped ______ it to the status of fine art, placing quilts beside paintings in the main gallery.",
  o:["elevate","confine","inspect","circulate"],
  why:"Moving from \"a mere household craft\" to \"fine art\" is a rise in status."}
],
"reciprocate": [
 {t:"Cleaner fish remove parasites from larger fish, which ______ by not eating them. Biologists cite the arrangement as a classic case in which both species benefit.",
  o:["reciprocate","speculate","accumulate","disengage"],
  why:"Both species benefit: the larger fish return the favor by leaving the cleaner fish unharmed."},
 {t:"When one country lowered its tariffs on imported steel, it expected its trading partner to ______. Instead, the partner kept its own tariffs in place, and the talks stalled.",
  o:["reciprocate","intrigue","depict","surpass"],
  why:"The country expected a similar action in return; \"Instead\" shows that the partner did not respond in kind."}
],
"tedious": [
 {t:"Archivists at the museum spent months copying thousands of handwritten shipping records. Although the work was ______, requiring the same careful steps for every page, it revealed trade routes that historians had long overlooked.",
  o:["tedious","lucrative","atypical","infallible"],
  why:"Months of repeating \"the same careful steps for every page\" describes work that is long, slow, and repetitive."},
 {t:"Counting pollen grains under a microscope is ______ work: a single sample can take a researcher six hours of nearly identical motions. A new imaging program now completes the same count in minutes.",
  o:["tedious","conclusive","vigorous","recognizable"],
  why:"\"Six hours of nearly identical motions\" points to work that is tiring because it is so repetitive."}
],
"lucrative": [
 {t:"When the canal opened in 1825, merchants who had struggled to move grain overland suddenly found the trade ______: shipping costs fell by nearly ninety percent, and profits rose accordingly.",
  o:["lucrative","tedious","comparable","unimportant"],
  why:"Falling costs and rising profits show that the trade began producing a great deal of money."},
 {t:"Few poets expect their work to be ______. Most support themselves by teaching or editing, since even a prizewinning collection rarely sells more than a few thousand copies.",
  o:["lucrative","unintelligible","inaccessible","communicative"],
  why:"Poets need other jobs because poetry sells poorly; in other words, it is not profitable."}
],
"atypical": [
 {t:"Most owls hunt at night, but the northern hawk owl is ______: it is active during the day and relies on sight more than hearing to find its prey.",
  o:["atypical","infallible","tedious","comparable"],
  why:"\"Most owls... but\" sets up a contrast: this owl differs from what is normal for owls."},
 {t:"The doctor noted that the patient's symptoms were ______ for the illness. People with this infection usually develop a fever within two days, but she had none after a full week.",
  o:["atypical","conclusive","recognizable","consequential"],
  why:"The patient did not show what people \"usually\" show, so her symptoms were not the expected ones."}
],
"generalization": [
 {t:"The claim that \"students prefer online classes\" is a ______ drawn from a survey of only forty people at a single university. A broader study would be needed before anyone could apply it to students everywhere.",
  o:["generalization","distraction","contradiction","projection"],
  why:"A broad statement about all students based on only forty people is a conclusion drawn from limited examples."},
 {t:"The biologist warns against the ______ that all deep-sea animals grow slowly. Her team has found several species of squid near the ocean floor that reach full size within a year.",
  o:["generalization","justification","occurrence","devotion"],
  why:"\"All deep-sea animals grow slowly\" is a sweeping statement, and the fast-growing squid show that it does not always hold."}
],
"intrigue": [
 {t:"The carved stone ______ archaeologists because its symbols match no known writing system. Dozens of researchers have since traveled to the site hoping to work out what it says.",
  o:["intrigued","reassured","depicted","surpassed"],
  why:"Researchers traveling to the site to work out the symbols shows that the stone made them very curious."},
 {t:"The novel is set in a royal court full of ______: ministers trade secrets, form hidden alliances, and quietly work to remove their rivals from power.",
  o:["intrigue","indifference","comprehension","abstraction"],
  why:"Secrets, hidden alliances, and quiet plots to gain power describe secret scheming."}
],
"surpass": [
 {t:"Engineers expected the new battery to last about ten hours. In testing, it ______ that estimate, powering the device for nearly fourteen hours on a single charge.",
  o:["surpassed","asserted","inspected","cultivated"],
  why:"Fourteen hours is more than the expected ten, so the battery exceeded the estimate."},
 {t:"For years, analysts doubted that solar power could ever ______ coal as the region's main source of electricity. Last year it did, supplying 41 percent of the total compared with coal's 35.",
  o:["surpass","reciprocate","depict","conceive"],
  why:"Solar supplied 41 percent to coal's 35, meaning it became greater than coal."}
],
"distraction": [
 {t:"Researchers found that students who kept phones on their desks, even face down, scored lower on memory tests. The mere presence of the device apparently served as a ______, pulling attention from the task.",
  o:["distraction","generalization","justification","proposition"],
  why:"Something \"pulling attention from the task\" is exactly what a distraction is."},
 {t:"The architect designed the library's reading room without windows at eye level, reasoning that a view of the busy street would be a ______ for people trying to concentrate.",
  o:["distraction","contradiction","similarity","competence"],
  why:"A busy street would draw attention away from reading, which is a problem for \"people trying to concentrate.\""}
],
"circulate": [
 {t:"In a greenhouse, fans ______ warm air from the ceiling down to the plants, preventing cold pockets from forming near the floor on winter nights.",
  o:["circulate","accumulate","speculate","disengage"],
  why:"Fans keep air moving continuously through the space, from the ceiling down to the floor."},
 {t:"Long before the newspaper printed the story, rumors of the factory's closing had begun to ______ among workers, passed along in break rooms and parking lots.",
  o:["circulate","surpass","elevate","conceive"],
  why:"Rumors \"passed along\" from person to person are spreading through the group."}
],
"disengage": [
 {t:"Teachers in the study noticed that when lessons moved too quickly, struggling students tended to ______: they stopped asking questions and no longer joined class discussions.",
  o:["disengage","reciprocate","elaborate","accumulate"],
  why:"Students who stop asking questions and stop joining discussions have withdrawn from involvement."},
 {t:"Before repairs can begin, the mechanic must ______ the engine from the transmission, releasing six bolts so that the two parts can be lifted out separately.",
  o:["disengage","cultivate","depict","assert"],
  why:"\"Releasing six bolts\" so the parts come out separately means detaching one from the other."}
],
"cultivate": [
 {t:"Farmers in the valley have learned to ______ rice on steep hillsides by cutting the slopes into flat steps that hold water after each rain.",
  o:["cultivate","inspect","circulate","speculate"],
  why:"Preparing the hillsides so that rice can be grown there is cultivating a crop."},
 {t:"The orchestra's director worked for years to ______ a relationship with local schools, visiting classrooms each month and inviting students to rehearsals. Attendance by young people has since tripled.",
  o:["cultivate","disengage","surpass","conceive"],
  why:"Years of visits and invitations show a relationship being developed through steady effort."}
],
"unintelligible": [
 {t:"The radio message from the expedition was so broken by static that it was ______. Rescuers could make out only a few scattered words and had no idea where the team was.",
  o:["unintelligible","conclusive","lucrative","vigorous"],
  why:"Rescuers could catch only scattered words and learned nothing, so the message could not be understood."},
 {t:"To a visitor, the notes that chess players write during a match look ______: rows of letters and numbers with no obvious meaning. To the players, each line records a move exactly.",
  o:["unintelligible","infallible","consequential","communicative"],
  why:"\"No obvious meaning\" tells us the notes are impossible for a visitor to understand."}
],
"conclusive": [
 {t:"The fossil suggested that the animal could fly, but the evidence was not ______. Only when a second specimen with preserved wing feathers turned up did scientists consider the question settled.",
  o:["conclusive","tedious","atypical","elaborate"],
  why:"The question was \"settled\" only later, so the first evidence did not prove the point beyond doubt."},
 {t:"A single experiment rarely provides ______ proof of a theory. Researchers generally wait until several independent teams have produced the same result before treating a claim as established.",
  o:["conclusive","recognizable","lucrative","inaccessible"],
  why:"Researchers wait for repeated results before calling a claim \"established,\" because one experiment is not decisive."}
],
"conceive": [
 {t:"The engineer first ______ the idea for the folding bridge while watching a child open and close a paper fan. It took another six years to turn that image into a working design.",
  o:["conceived","inspected","circulated","surpassed"],
  why:"The moment an idea first forms in someone's mind is when it is conceived."},
 {t:"Before telescopes, few people could ______ of a universe containing billions of galaxies. The night sky seemed to hold a few thousand stars and little else.",
  o:["conceive","disengage","reciprocate","accumulate"],
  why:"People could not imagine a universe so large; \"conceive of\" means to form such an idea in the mind."}
],
"elaborate": [
 {t:"The male bowerbird builds an ______ structure to attract a mate, arranging hundreds of twigs into an arch and decorating the entrance with shells, berries, and bits of colored glass.",
  o:["elaborate","atypical","unimportant","inaccessible"],
  why:"Hundreds of twigs plus careful decoration describe something detailed, complex, and carefully planned."},
 {t:"In the interview, the senator said only that the plan had \"problems.\" When reporters asked her to ______, she declined, promising a full explanation the following week.",
  o:["elaborate","reciprocate","circulate","accumulate"],
  why:"Reporters wanted more detail than the single word \"problems\"; she promised that fuller explanation later."}
],
"inaccessible": [
 {t:"Heavy snow leaves the mountain village ______ for four months each year. During that time, supplies arrive only by helicopter, and residents cannot drive to the nearest town.",
  o:["inaccessible","recognizable","lucrative","communicative"],
  why:"If supplies come only by helicopter and no one can drive out, the village is very difficult to reach."},
 {t:"The physicist's early papers were ______ to most readers, filled with equations and unexplained terms. Her later book, written for a general audience, finally made the same ideas clear.",
  o:["inaccessible","conclusive","comparable","infallible"],
  why:"The later book \"finally made the same ideas clear,\" so the early papers were hard for readers to understand."}
],
"vigorous": [
 {t:"The proposal to close the library met ______ opposition: hundreds of residents filled the council meeting, and more than five thousand signed a petition within a week.",
  o:["vigorous","tedious","unintelligible","atypical"],
  why:"A packed meeting and five thousand signatures in a week show opposition that was strong and energetic."},
 {t:"Tomato plants given the new fertilizer showed ______ growth, adding nearly twice as many leaves in a month as plants grown in ordinary soil.",
  o:["vigorous","inaccessible","communicative","conclusive"],
  why:"Twice as many leaves in a month is strong, energetic growth."}
],
"communicative": [
 {t:"Honeybees are remarkably ______ insects. By performing a \"dance\" inside the hive, a returning bee can tell others the direction and distance of a patch of flowers.",
  o:["communicative","lucrative","infallible","unimportant"],
  why:"A bee that can \"tell others\" where flowers are is sharing information."},
 {t:"Patients rated the clinic highly because its doctors were ______: they explained each test in plain language and answered questions without hurrying.",
  o:["communicative","atypical","vigorous","elaborate"],
  why:"Explaining clearly and answering questions shows doctors who share information openly."}
],
"depict": [
 {t:"The cave paintings ______ herds of horses and bison in motion, their legs drawn in several positions at once as if the artist wanted to show them running.",
  o:["depict","inspect","surpass","cultivate"],
  why:"Paintings that \"show\" animals running are representing them in a picture."},
 {t:"Historians note that the film does not accurately ______ life in the mining town. Real miners worked twelve-hour shifts, yet the characters seem to have endless free time.",
  o:["depict","accumulate","reciprocate","disengage"],
  why:"The complaint is about how the film shows, or represents, life in the town."}
],
"speculate": [
 {t:"Because no written records survive, historians can only ______ about why the city was abandoned. Drought, disease, and war have each been proposed, but none has been proven.",
  o:["speculate","elaborate","circulate","reciprocate"],
  why:"With no records and nothing proven, historians can only form theories without firm evidence."},
 {t:"During the 1840s, thousands of ordinary investors rushed to ______ in railway companies, many of which had not yet laid a single track. When prices collapsed, most lost their savings.",
  o:["speculate","cultivate","depict","inspect"],
  why:"Putting money into unproven companies in the hope of a large profit is speculating."}
],
"accumulate": [
 {t:"Dust and pollen ______ slowly on the lake bottom, forming a new layer of mud each year. By counting the layers, scientists can date events from thousands of years ago.",
  o:["accumulate","speculate","disengage","reciprocate"],
  why:"Material that builds up layer by layer over the years is gradually gathering."},
 {t:"Over forty years, the librarian ______ more than nine thousand letters written by local families, a collection now considered the best record of daily life in the region.",
  o:["accumulated","depicted","surpassed","conceived"],
  why:"A collection that grew to nine thousand letters over forty years was gathered gradually over time."}
],
"consequential": [
 {t:"Of all the laws passed that year, the education act proved the most ______: within a decade it had doubled the number of children attending school.",
  o:["consequential","tedious","unintelligible","recognizable"],
  why:"Doubling school attendance is a significant result, so the law was important for its effects."},
 {t:"What looked like a minor design choice turned out to be highly ______. Moving the button two centimeters to the left cut user errors by half.",
  o:["consequential","infallible","inaccessible","lucrative"],
  why:"A choice that seemed \"minor\" had a large effect, cutting errors by half."}
],
"assert": [
 {t:"In her 1962 book, the biologist ______ that pesticides were harming far more than insects. Chemical companies disputed the claim, but later studies supported her.",
  o:["asserted","inspected","cultivated","surpassed"],
  why:"She made a firm \"claim\" that others disputed, which means she stated it confidently as true."},
 {t:"After decades under the control of a distant capital, the province began to ______ its independence, creating its own courts and collecting its own taxes.",
  o:["assert","depict","accumulate","conceive"],
  why:"Setting up its own courts and taxes is acting forcefully to establish its independence."}
],
"abstraction": [
 {t:"To young children, \"justice\" is an ______ that is hard to grasp. They understand it more easily through a concrete example, such as sharing toys equally.",
  o:["abstraction","occurrence","objection","estimation"],
  why:"\"Justice\" is a general idea, contrasted here with \"a concrete example.\""},
 {t:"The mathematician was known for his ______: absorbed in a problem, he once walked past his own house three times without noticing.",
  o:["abstraction","generalization","competence","resentment"],
  why:"Being so absorbed that he missed his own house shows a state of being lost in thought."}
],
"exemplify": [
 {t:"The chameleon's rapid color shift ______ the camouflage adaptations that many reptiles evolved to evade predators in dense forests.",
  o:["exemplifies","undermines","contradicts","mitigates"],
  why:"The color shift is presented as one typical case of \"the camouflage adaptations that many reptiles evolved.\""},
 {t:"The poet ______ her abstract argument about mortality by describing a wilting flower left forgotten on a windowsill.",
  o:["exemplified","contradicted","concealed","tolerated"],
  why:"She made an \"abstract argument\" concrete \"by describing a wilting flower,\" which is giving an example to explain it."}
],
"inference": [
 {t:"From the character's clenched fists and silence, readers can draw the ______ that she is suppressing overwhelming anger.",
  o:["inference","objection","contradiction","designation"],
  why:"Readers reason \"from the character's clenched fists and silence\" to a conclusion the text never states directly."},
 {t:"Because no written records survive, historians rely on ______ from pottery shards to reconstruct the trade routes of that vanished civilization.",
  o:["inference","correspondence","abstraction","devotion"],
  why:"With \"no written records,\" historians must reason from evidence (\"pottery shards\") to conclusions about the trade routes."}
],
"articulate": [
 {t:"The therapist encouraged the patient to ______ his fears aloud, believing that naming them would lessen their grip.",
  o:["articulate","conceal","tolerate","intensify"],
  why:"\"Aloud\" and \"naming them\" show the patient is being asked to put his fears clearly into words."},
 {t:"Despite her shyness, the witness proved surprisingly ______, laying out the timeline of events without a single stumble.",
  o:["articulate","apprehensive","incoherent","argumentative"],
  why:"\"Laying out the timeline of events without a single stumble\" describes someone who expresses herself clearly, a surprise \"despite her shyness.\""}
],
"confine": [
 {t:"The emperor's advisers urged him to ______ his ambitions to the northern provinces rather than risk a costly, sprawling war.",
  o:["confine","elevate","disperse","reiterate"],
  why:"Keeping his ambitions \"to the northern provinces rather than risk a costly, sprawling war\" means restricting them within limits."},
 {t:"In the play, the prisoner is ______ to a cramped cell, his only view a sliver of light beneath the door.",
  o:["confined","liberated","elevated","alienated"],
  why:"A \"prisoner\" kept in \"a cramped cell\" with only a sliver of light is shut in a place."}
],
"contaminate": [
 {t:"A single crack in the lab's seal can ______ an entire sample, introducing bacteria that skew every subsequent measurement.",
  o:["contaminate","validate","simulate","classify"],
  why:"\"Introducing bacteria that skew every subsequent measurement\" describes making the sample impure."},
 {t:"Misinformation online can ______ public debate, mixing false claims with facts until few reliable sources remain trusted.",
  o:["contaminate","illuminate","facilitate","mediate"],
  why:"\"Mixing false claims with facts until few reliable sources remain trusted\" describes spoiling debate by adding something harmful."}
],
"indifference": [
 {t:"Despite years of petitions, the distant monarch treated the colonists' complaints with ______, showing no concern for their hardships.",
  o:["indifference","competence","comprehension","rationality"],
  why:"\"Showing no concern for their hardships\" restates how the monarch treated the complaints: with a lack of interest."},
 {t:"The survey revealed widespread ______ toward local elections, with many citizens admitting they simply did not care who won.",
  o:["indifference","resentment","devotion","objection"],
  why:"Citizens \"simply did not care who won,\" which is a lack of interest in the elections."}
],
"simplify": [
 {t:"The editor urged the young author to ______ her tangled plot, trimming subplots that confused early readers.",
  o:["simplify","diversify","intensify","reiterate"],
  why:"A \"tangled plot\" is fixed by \"trimming subplots that confused early readers,\" which makes it easier to follow."},
 {t:"The new emperor ______ the tax structure, replacing dozens of confusing local levies with one uniform rate.",
  o:["simplified","diversified","fractured","tolerated"],
  why:"\"Replacing dozens of confusing local levies with one uniform rate\" makes the tax structure easier to understand."}
],
"turbulent": [
 {t:"The kingdom endured a ______ century of coups and rebellions, as rival factions repeatedly seized and lost the throne.",
  o:["turbulent","harmonious","triumphant","benevolent"],
  why:"A century \"of coups and rebellions\" in which factions \"repeatedly seized and lost the throne\" is full of disorder and conflict."},
 {t:"The sailor's diary described ______ seas that tossed the ship violently, drenching the frightened crew in icy spray.",
  o:["turbulent","stagnant","temperate","luminous"],
  why:"Seas \"that tossed the ship violently\" are moving roughly and unevenly."}
],
"influential": [
 {t:"A handful of ______ merchants swayed the council's trade policy, their opinions carrying more weight than the formal votes of lesser guild members.",
  o:["influential","destitute","submissive","indifferent"],
  why:"The merchants \"swayed the council's trade policy,\" and their opinions carried \"more weight\" than formal votes."},
 {t:"One ______ paper on plate tectonics reshaped how geologists explained mountain formation, prompting textbooks to revise their entire chapters.",
  o:["influential","irrelevant","trivial","superfluous"],
  why:"The paper \"reshaped how geologists explained mountain formation\" and made textbooks revise chapters, so it had a strong effect."}
],
"deceive": [
 {t:"The general ordered decoy campfires lit across the empty hills, hoping to ______ scouts into believing the army had not yet retreated.",
  o:["deceive","humiliate","alienate","persecute"],
  why:"\"Decoy campfires\" were meant to make scouts believe something false: that \"the army had not yet retreated.\""},
 {t:"Certain moths display eyespots to ______ predators, mimicking the appearance of a much larger and more dangerous animal.",
  o:["deceive","tolerate","reassure","contaminate"],
  why:"Eyespots work by \"mimicking the appearance of a much larger and more dangerous animal,\" making predators believe something untrue."}
],
"complication": [
 {t:"Supply shortages created a fresh ______ for the city's transit plan, delaying construction that officials had promised to finish this year.",
  o:["complication","justification","proponent","designation"],
  why:"\"Supply shortages\" made the plan harder to carry out, \"delaying construction\" that officials had promised to finish."},
 {t:"The wounded king's fever, a dangerous ______ of his untreated injury, ultimately killed him weeks after the battle had ended.",
  o:["complication","fracture","connotation","approximation"],
  why:"A \"fever\" that arose from \"his untreated injury\" and killed him is a new medical problem developing from the first one."}
],
"mitigate": [
 {t:"The old healer's herbs could ______ the fever's worst symptoms, though nothing in her modest hut could cure it entirely.",
  o:["mitigate","aggravate","simulate","validate"],
  why:"The herbs help with the \"worst symptoms, though nothing ... could cure it entirely,\" so they lessen the illness without ending it."},
 {t:"Planting native grasses can ______ soil erosion, since deep roots hold sediment in place far better than shallow, non-native species.",
  o:["mitigate","accelerate","facilitate","exaggerate"],
  why:"\"Deep roots hold sediment in place,\" so native grasses make erosion less severe."}
],
"migrate": [
 {t:"Marine biologists attached satellite tags to humpback whales, confirming that the animals ______ thousands of miles between icy feeding grounds and warm breeding waters.",
  o:["migrate","converge","languish","originate"],
  why:"Whales traveling \"thousands of miles between icy feeding grounds and warm breeding waters\" are making a seasonal journey between regions."},
 {t:"Facing famine and political upheaval, thousands of Irish families chose to ______ across the Atlantic, seeking farmland and steady wages in unfamiliar cities.",
  o:["migrate","retaliate","intervene","persist"],
  why:"Families who cross \"the Atlantic, seeking farmland and steady wages\" to escape famine are moving to a new country to live."}
],
"classify": [
 {t:"City planners now ______ neighborhoods by flood risk, using updated maps to group areas according to their vulnerability to rising waters.",
  o:["classify","simulate","reconstruct","confine"],
  why:"Planners sort neighborhoods \"by flood risk\" in order \"to group areas according to their vulnerability.\""},
 {t:"During the Cold War, military officials moved to ______ the satellite program's blueprints, restricting access to only a handful of trusted engineers.",
  o:["classify","circulate","simplify","validate"],
  why:"\"Restricting access to only a handful of trusted engineers\" shows the blueprints were officially made secret."}
],
"intriguing": [
 {t:"Researchers noticed an ______ pattern in the coral samples, where growth rings seemed to correspond with unusually warm ocean currents from decades earlier.",
  o:["intriguing","inquisitive","incredulous","exorbitant"],
  why:"Growth rings that \"seemed to correspond with unusually warm ocean currents\" are a pattern that makes researchers curious."},
 {t:"The old diary's cryptic final entry struck the young narrator as ______, hinting at a family secret no one dared to mention aloud.",
  o:["intriguing","tedious","frivolous","uneventful"],
  why:"A \"cryptic\" entry \"hinting at a family secret no one dared to mention\" is something that arouses curiosity."}
],
"antiquity": [
 {t:"The wandering scholar in the novel longs to recover forgotten wisdom from ______, believing ancient texts hold truths modern books have lost.",
  o:["antiquity","abstraction","rationality","indifference"],
  why:"The scholar believes \"ancient texts hold truths modern books have lost,\" so the forgotten wisdom comes from the ancient past."},
 {t:"The museum's prized ______, a bronze helmet unearthed near an old battlefield, offered rare insight into ancient soldiers' armor and craftsmanship.",
  o:["antiquity","periodical","scripture","buttress"],
  why:"The item is \"a bronze helmet\" giving insight into \"ancient soldiers' armor,\" an object surviving from ancient times."}
],
"contentious": [
 {t:"Economists find the minimum wage a ______ topic, since raising it sparks fierce debate over job losses versus improved household income.",
  o:["contentious","trivial","harmonious","conclusive"],
  why:"The topic \"sparks fierce debate\" between two opposing views, so it is one that causes disagreement."},
 {t:"The narrator describes her uncle as naturally ______, someone who could turn even a simple dinner into a prolonged, needling debate.",
  o:["contentious","agreeable","submissive","meditative"],
  why:"Someone who turns \"even a simple dinner into a prolonged, needling debate\" is inclined to argue."}
],
"contradictory": [
 {t:"Officials issued ______ statements about the water supply, first calling it safe, then urging residents to boil it before drinking.",
  o:["contradictory","emphatic","conclusive","apologetic"],
  why:"Officials were \"first calling it safe, then urging residents to boil it,\" two statements that cannot both be true."},
 {t:"Economic forecasts from the two analysts were ______, one predicting a swift recovery and the other warning of prolonged stagnation.",
  o:["contradictory","comparable","impartial","proportionate"],
  why:"One forecast predicted \"a swift recovery\" and the other \"prolonged stagnation,\" so the two oppose each other."}
],
"obtain": [
 {t:"Residents must now ______ a permit before installing solar panels, a requirement meant to ensure safety standards are met.",
  o:["obtain","dispense","tolerate","simulate"],
  why:"A permit is something residents must get \"before installing solar panels\"; it is called \"a requirement.\""},
 {t:"In the story's strange kingdom, an old law still ______: no citizen may speak the ruler's name after sunset.",
  o:["obtains","converges","intervenes","retaliates"],
  why:"\"An old law still\" followed by the rule itself shows the law remains in effect in the kingdom."}
],
"contradiction": [
 {t:"Researchers highlighted a ______ in public attitudes, since people claim to value privacy yet freely share personal data online.",
  o:["contradiction","similarity","justification","prevalence"],
  why:"People \"claim to value privacy yet freely share personal data,\" two things that do not fit together."},
 {t:"The critic's glowing review stood in direct ______ to his earlier essay, which had dismissed the author's work entirely.",
  o:["contradiction","correspondence","dependence","approximation"],
  why:"A \"glowing review\" opposes an \"earlier essay, which had dismissed the author's work entirely.\""}
],
"grammatical": [
 {t:"Developers trained the chatbot on vast amounts of text so it could master the ______ rules of several languages.",
  o:["grammatical","numerical","metaphysical","prudential"],
  why:"The chatbot learns from text to master the \"rules of several languages,\" which are rules of grammar."},
 {t:"A medieval scribe earned praise for producing ______ Latin manuscripts despite having little formal schooling.",
  o:["grammatical","erroneous","incoherent","numerical"],
  why:"A scribe \"earned praise\" for his Latin \"despite having little formal schooling,\" so the writing correctly followed the language's rules."}
],
"estimation": [
 {t:"Chroniclers offered only a rough ______ of the army's size, since no official census survived the siege.",
  o:["estimation","justification","contradiction","designation"],
  why:"\"Only a rough\" figure for \"the army's size\" was possible because \"no official census survived.\""},
 {t:"In the old sailor's ______, no other captain could match the quiet courage of his late friend.",
  o:["estimation","volition","indifference","absorption"],
  why:"\"In the old sailor's ...\" introduces his personal opinion: that no captain could match his late friend's courage."}
],
"revolutionize": [
 {t:"The printing press ______ how ideas spread across Europe, ending scribes' near monopoly on copying texts by hand.",
  o:["revolutionized","obscured","confined","simulated"],
  why:"The press ended \"scribes' near monopoly on copying texts by hand,\" a complete change in how ideas spread."},
 {t:"The discovery of antibiotics ______ medicine, turning once-fatal infections into conditions doctors could treat within weeks.",
  o:["revolutionized","undermined","contradicted","reinstated"],
  why:"\"Turning once-fatal infections into conditions doctors could treat within weeks\" is a fundamental change to medicine."}
],
"dispense": [
 {t:"The clinic's new machine ______ vaccines automatically, cutting long wait times during the busy flu season.",
  o:["dispenses","contaminates","simulates","conceals"],
  why:"A clinic machine that handles vaccines \"automatically, cutting long wait times\" is giving them out to patients."},
 {t:"Facing sudden invasion, the general ______ with formal ceremony and marched his troops out before dawn broke.",
  o:["dispensed","sympathized","intervened","reciprocated"],
  why:"\"Facing sudden invasion,\" the general skipped \"formal ceremony\" and marched \"before dawn,\" so he did without it."}
],
"plausible": [
 {t:"Historians proposed a ______ explanation for the empire's sudden collapse, noting that drought records matched the timing of abandoned granaries and cities.",
  o:["plausible","preposterous","figurative","contradictory"],
  why:"The explanation is supported by evidence: \"drought records matched the timing of abandoned granaries,\" so it seems reasonable."},
 {t:"Researchers considered it ______ that the newly discovered microbe survives extreme heat, since related species had already been found thriving near volcanic vents.",
  o:["plausible","improbable","inexplicable","ludicrous"],
  why:"\"Since related species had already been found thriving near volcanic vents,\" the idea seems reasonable and likely to be true."}
],
"utterance": [
 {t:"The linguist's recording device captured the infant's first ______, a single syllable that researchers later linked to early language development.",
  o:["utterance","inference","abstraction","proposition"],
  why:"A \"recording device\" captured it, and it was \"a single syllable,\" so it is something the infant said."},
 {t:"Witnesses at the trial repeated the accused man's ______ word for word, insisting his quiet confession had been clearly heard by all.",
  o:["utterance","scripture","correspondence","estimation"],
  why:"Witnesses repeated it \"word for word\" and said it \"had been clearly heard,\" so it was a spoken statement."}
],
"profound": [
 {t:"Losing a job can have a ______ effect on a person's sense of identity, researchers found, often lasting long after reemployment.",
  o:["profound","momentary","trivial","pleasurable"],
  why:"An effect on \"a person's sense of identity\" that lasts \"long after reemployment\" is very great and deep."},
 {t:"The ancient philosopher's ______ remark about justice still guides modern courts, revealing insight far ahead of his contemporaries' simpler views.",
  o:["profound","frivolous","whimsical","erroneous"],
  why:"A remark that \"still guides modern courts\" and reveals \"insight far ahead of\" simpler views shows deep understanding."}
],
"prominent": [
 {t:"The professor became a ______ figure in economic policy circles, her research frequently cited by lawmakers debating tax reform.",
  o:["prominent","negligent","submissive","capricious"],
  why:"Her research was \"frequently cited by lawmakers,\" so she was important and well known in policy circles."},
 {t:"A ______ scar across the villain's cheek, visible even from the back row, marked him instantly whenever he entered a scene.",
  o:["prominent","momentary","figurative","harmonious"],
  why:"The scar is \"visible even from the back row\" and \"marked him instantly,\" so it is very easy to see."}
],
"persevere": [
 {t:"Though every publisher rejected her manuscript, the poet ______, revising stanzas late into the night rather than giving up on her voice.",
  o:["persevered","conceded","languished","retaliated"],
  why:"\"Though every publisher rejected\" her, she kept revising \"rather than giving up.\""},
 {t:"After dozens of failed attempts to stabilize the compound, the chemists ______, adjusting one variable at a time until the reaction finally succeeded.",
  o:["persevered","dispersed","thrived","conformed"],
  why:"\"After dozens of failed attempts,\" the chemists kept adjusting variables \"until the reaction finally succeeded.\""}
],
"generalize": [
 {t:"After testing the reaction under many conditions, chemists ______ their findings into a single rule predicting how temperature affects reaction speed.",
  o:["generalized","dispersed","diversified","fractured"],
  why:"Results from \"many conditions\" were turned \"into a single rule,\" a broad conclusion drawn from specific cases."},
 {t:"It is tempting to ______ that all introverts dislike public speaking, but the survey revealed wide variation among quiet individuals.",
  o:["generalize","conceal","dictate","preclude"],
  why:"A claim about \"all introverts\" is contrasted with \"wide variation,\" so it is a broad statement that ignores exceptions."}
],
"innate": [
 {t:"Biologists noted that the chick's pecking motion appeared ______, since it performed the behavior perfectly on its very first day, unlearned.",
  o:["innate","laborious","deficient","conditional"],
  why:"The chick did it \"perfectly on its very first day, unlearned,\" so the behavior was present from birth."},
 {t:"The playwright suggests that cruelty is not ______ but learned, since even the villain once showed childlike generosity before betrayal hardened him.",
  o:["innate","inexcusable","infectious","justifiable"],
  why:"The word is set against \"learned\" (\"not ... but learned\"), so it means something a person is born with."}
],
"spontaneous": [
 {t:"Chroniclers described the uprising as ______, erupting from scattered grain shortages rather than any deliberate plan by rebel leaders.",
  o:["spontaneous","methodical","triumphant","preparatory"],
  why:"The uprising came \"from scattered grain shortages rather than any deliberate plan,\" so it arose on its own without planning."},
 {t:"During the interview, his ______ joke surprised even himself, since he had prepared none of his remarks in advance.",
  o:["spontaneous","elaborate","laborious","proverbial"],
  why:"He \"had prepared none of his remarks in advance\" and the joke \"surprised even himself,\" so it was unplanned."}
],
"divergence": [
 {t:"Economists noted a growing ______ between wages and living costs, a gap that left many families unable to save for emergencies.",
  o:["divergence","similarity","correspondence","dependence"],
  why:"The phrase is restated as \"a gap\" between wages and living costs, and \"growing\" shows the two are moving apart."},
 {t:"The novel's two narrators recount the same summer so differently that the ______ between their versions leaves readers unsure whom to trust.",
  o:["divergence","approximation","substitution","prevalence"],
  why:"The narrators tell the same summer \"so differently\" that readers cannot tell whom to trust, so their versions differ."}
],
"deviation": [
 {t:"The general's sudden ______ from the agreed battle plan surprised his own officers, yet it ultimately caught the enemy completely off guard.",
  o:["deviation","inference","dependence","projection"],
  why:"The general departed \"from the agreed battle plan,\" which \"surprised his own officers.\""},
 {t:"A slight ______ in the comet's orbit alerted astronomers to the gravitational pull of a previously undetected planet nearby.",
  o:["deviation","similarity","proposition","generalization"],
  why:"A small change \"in the comet's orbit\" from its expected path revealed the pull of an undetected planet."}
],
"variance": [
 {t:"The survey uncovered wide ______ in how different generations define a successful career, complicating any single workplace policy.",
  o:["variance","similarity","competence","rationality"],
  why:"\"Different generations\" define success differently, which complicates \"any single workplace policy,\" so the answers differ widely."},
 {t:"The treaty's harsh terms were plainly at ______ with the peaceful promises both rulers had made only months before signing it.",
  o:["variance","correspondence","essence","volition"],
  why:"\"Harsh terms\" conflict with \"peaceful promises,\" and the fixed phrase \"at ... with\" means in disagreement with."}
],
"susceptible": [
 {t:"Seedlings grown without proper hardening remain highly ______ to frost damage, wilting quickly when temperatures drop overnight.",
  o:["susceptible","oblivious","impenetrable","attentive"],
  why:"Seedlings \"without proper hardening\" end up \"wilting quickly when temperatures drop,\" so they are easily harmed by frost."},
 {t:"Officials in the crumbling empire grew ______ to flattery, rewarding courtiers who praised them rather than those who offered honest counsel.",
  o:["susceptible","indifferent","inaccessible","incredulous"],
  why:"The officials were \"rewarding courtiers who praised them,\" which shows flattery easily swayed them."}
],
"logical": [
 {t:"The chemist's conclusion was ______: since the reaction released heat only when oxygen was present, oxygen must fuel the process.",
  o:["logical","arbitrary","subjective","figurative"],
  why:"The reasoning after the colon (\"since ... oxygen must fuel the process\") shows the conclusion follows soundly from the evidence."},
 {t:"Given the community's history of unemployment, it was ______ that residents distrusted promises of new factory jobs.",
  o:["logical","inconceivable","preposterous","scandalous"],
  why:"\"Given the community's history of unemployment,\" distrust of job promises is exactly what one would expect."}
],
"demonstrative": [
 {t:"Unlike his reserved ancestors, the young duke was famously ______, embracing courtiers and weeping openly at public ceremonies.",
  o:["demonstrative","indifferent","vindictive","methodical"],
  why:"\"Unlike his reserved ancestors,\" the duke was \"embracing courtiers and weeping openly,\" freely showing his feelings."},
 {t:"The unearthed ledgers proved ______, offering direct evidence that the merchant guild had secretly funded the rebellion.",
  o:["demonstrative","circumstantial","erroneous","irrelevant"],
  why:"The ledgers were \"offering direct evidence\" that the guild funded the rebellion, so they served to prove it."}
],
"validate": [
 {t:"Independent audits ______ the startup's claims, confirming that its recycling process actually reduced landfill waste as promised.",
  o:["validated","contradicted","exaggerated","obscured"],
  why:"The audits ended up \"confirming that its recycling process actually reduced landfill waste as promised.\""},
 {t:"The licensing board ______ the counselor's credentials, officially permitting her to practice after months of review.",
  o:["validated","undermined","concealed","dissolved"],
  why:"A \"licensing board\" acted on her credentials, \"officially permitting her to practice,\" which is formal approval."}
],
"simulate": [
 {t:"Engineers used a wind tunnel to ______ hurricane conditions, testing whether the bridge's design could withstand extreme gusts.",
  o:["simulate","mitigate","preclude","classify"],
  why:"A \"wind tunnel\" recreates hurricane conditions artificially so engineers can test the bridge design."},
 {t:"Desperate to escape the ball, the heroine chose to ______ illness, feigning faintness so she could slip away unnoticed.",
  o:["simulate","conceal","withstand","tolerate"],
  why:"\"Feigning faintness so she could slip away\" shows she only pretended to be ill."}
],
"prevalent": [
 {t:"Before vaccination campaigns began, smallpox was so ______ in many regions that few families escaped its devastating reach entirely.",
  o:["prevalent","infrequent","obscure","tolerable"],
  why:"\"Few families escaped its devastating reach,\" so the disease was extremely widespread."},
 {t:"Researchers found that loneliness is ______ among urban dwellers despite living surrounded by thousands of potential neighbors and friends.",
  o:["prevalent","atypical","inconceivable","momentary"],
  why:"\"Despite\" being surrounded by thousands of potential friends, city residents commonly feel lonely, as the researchers \"found.\""}
],
"comprehension": [
 {t:"The professor tested ______ by asking students to explain photosynthesis in their own words rather than recite memorized definitions.",
  o:["comprehension","devotion","morality","volition"],
  why:"Asking students to explain \"in their own words rather than recite memorized definitions\" checks whether they truly understand."},
 {t:"The poem's fragmented structure resists easy ______, forcing readers to piece together meaning from scattered, disconnected images.",
  o:["comprehension","substitution","dependence","accumulation"],
  why:"The poem forces readers \"to piece together meaning from scattered, disconnected images,\" so it is hard to understand."}
],
"accelerate": [
 {t:"Adding a catalyst can ______ a chemical reaction, allowing molecules to combine far faster than they would unaided.",
  o:["accelerate","preclude","dissolve","confine"],
  why:"With a catalyst, molecules \"combine far faster than they would unaided,\" so the reaction speeds up."},
 {t:"The assassination did not cause the war alone, but historians agree it ______ a conflict that had already seemed inevitable.",
  o:["accelerated","simulated","mediated","obscured"],
  why:"The assassination \"did not cause the war alone\" because the conflict \"already seemed inevitable\"; it only made it come sooner."}
],
"coherent": [
 {t:"The novel's fragmented chapters eventually form a ______ story once readers realize the timeline moves backward, not forward.",
  o:["coherent","contradictory","monotonous","figurative"],
  why:"\"Fragmented chapters\" come together and make sense \"once readers realize the timeline moves backward.\""},
 {t:"Though badly wounded, the general remained ______ enough to issue clear orders that ultimately saved his retreating troops.",
  o:["coherent","delirious","irritable","submissive"],
  why:"\"Though badly wounded,\" he could still \"issue clear orders,\" so he was thinking and speaking clearly."}
],
"resentment": [
 {t:"Workers expressed ______ when executives received bonuses in the same year that ordinary staff wages were frozen.",
  o:["resentment","devotion","indifference","competence"],
  why:"Executives \"received bonuses\" while \"ordinary staff wages were frozen,\" unfair treatment that produces bitter anger."},
 {t:"After the treaty stripped the province of its ancestral lands, villagers nursed a quiet ______ that would erupt into rebellion a generation later.",
  o:["resentment","dependence","rationality","proposition"],
  why:"Villagers \"stripped\" of \"ancestral lands\" held a feeling that would \"erupt into rebellion,\" which is anger at unfair treatment."}
],
"rationality": [
 {t:"Enlightenment thinkers championed ______ over superstition, insisting that careful reasoning, not inherited belief, should guide public policy.",
  o:["rationality","scripture","devotion","antiquity"],
  why:"It is set against \"superstition\" and explained as \"careful reasoning, not inherited belief.\""},
 {t:"Behavioral economists argue that pure ______ rarely governs financial choices, since fear and habit often override careful calculation.",
  o:["rationality","resentment","indifference","intrigue"],
  why:"\"Fear and habit often override careful calculation,\" so the quality that rarely governs choices is reason and logic."}
],
"contradict": [
 {t:"New satellite measurements ______ the earlier model, showing the glacier retreating far faster than scientists had predicted.",
  o:["contradict","corroborate","validate","simulate"],
  why:"The measurements show the glacier \"retreating far faster than scientists had predicted,\" so they are inconsistent with the earlier model."},
 {t:"During the interview, the witness ______ her earlier statement, changing key details about where she had been standing.",
  o:["contradicted","reiterated","affirmed","simplified"],
  why:"\"Changing key details about where she had been standing\" means her new account opposed what she had said before."}
],
"illustrate": [
 {t:"To ______ how enzymes speed reactions, the professor compared them to a key that quickly unlocks a stubborn door.",
  o:["illustrate","conceal","accelerate","contradict"],
  why:"The professor explained a process by comparison, likening enzymes \"to a key that quickly unlocks a stubborn door.\""},
 {t:"A local artist was commissioned to ______ the children's book, filling its margins with whimsical creatures drawn in ink.",
  o:["illustrate","circulate","classify","dictate"],
  why:"An \"artist\" was hired for the book, \"filling its margins with whimsical creatures drawn in ink,\" which means adding pictures."}
],
"essence": [
 {t:"Stripped of complicated equations, the ______ of the theory is simple: energy cannot be created or destroyed, only transformed.",
  o:["essence","complication","contradiction","prevalence"],
  why:"\"Stripped of complicated equations,\" what remains is the theory's most basic idea, stated after the colon."},
 {t:"Critics agreed that the ______ of the play was not its plot but the quiet despair beneath every character's forced smile.",
  o:["essence","designation","utterance","antiquity"],
  why:"\"Not its plot but the quiet despair\" identifies what critics saw as the play's most important, basic quality."}
],
"undermine": [
 {t:"Secret alliances among rival nobles began to ______ the king's authority, leaving his throne weaker with every whispered betrayal.",
  o:["undermine","buttress","affirm","elevate"],
  why:"\"Secret alliances\" left the throne \"weaker with every whispered betrayal,\" a gradual, hidden weakening of authority."},
 {t:"Chronic stress can ______ memory over time, gradually eroding the brain's ability to store and retrieve everyday information.",
  o:["undermine","cultivate","facilitate","illuminate"],
  why:"\"Over time\" and \"gradually eroding the brain's ability to store and retrieve\" information describe a slow weakening of memory."}
],
"similarity": [
 {t:"The geologist pointed out a curious ______ in the rock layers on separate continents, evidence that they were once joined.",
  o:["similarity","divergence","contradiction","complication"],
  why:"Matching rock layers \"on separate continents\" are \"evidence that they were once joined,\" so the layers are alike."},
 {t:"Linguists traced a deep ______ between the two languages' grammar, hinting at a common ancestor spoken thousands of years ago.",
  o:["similarity","friction","variance","deviation"],
  why:"A shared feature of \"the two languages' grammar\" is what would hint at \"a common ancestor.\""}
],
"definite": [
 {t:"The counselor encouraged the students to set a ______ goal rather than a vague wish, since clear targets are easier to reach.",
  o:["definite","conditional","subjective","whimsical"],
  why:"The goal is contrasted with \"a vague wish\" and linked to \"clear targets,\" so it is clearly stated."},
 {t:"By the time the army reached the river, defeat seemed ______, and the general began planning an orderly retreat.",
  o:["definite","improbable","inconceivable","irrelevant"],
  why:"The general \"began planning an orderly retreat,\" which shows he regarded defeat as certain."}
],
"disturbance": [
 {t:"A single stone dropped into the still pond created a widening ______ that rippled outward across the calm surface.",
  o:["disturbance","fracture","absorption","accumulation"],
  why:"A stone dropped into a \"still pond\" interrupts the \"calm surface\" with ripples spreading outward."},
 {t:"When bread prices soared, angry crowds filled the square in a ______ that soldiers were sent to quell before dawn.",
  o:["disturbance","distraction","proposition","deviation"],
  why:"\"Angry crowds filled the square\" and soldiers were \"sent to quell\" it, which describes a public disorder."}
],
"volition": [
 {t:"Some reflexes occur without ______, firing automatically before the brain's conscious decision-making regions even register the stimulus.",
  o:["volition","morality","resentment","correspondence"],
  why:"Reflexes fire \"automatically before the brain's conscious decision-making regions\" react, so no act of will is involved."},
 {t:"Volunteers who joined the neighborhood cleanup did so entirely of their own ______, receiving no pay or public recognition.",
  o:["volition","estimation","competence","designation"],
  why:"Volunteers got \"no pay or public recognition,\" so they joined by free choice; \"of their own ...\" is the standard phrase."}
],
"compensate": [
 {t:"The plant's roots grew deeper to ______ for the shallow, drought-prone soil where it had taken hold.",
  o:["compensate","retaliate","persist","speculate"],
  why:"Roots growing \"deeper\" make up for the weakness of \"shallow, drought-prone soil.\""},
 {t:"The merchant offered to ______ the widow generously, hoping money might ease the guilt he carried over her husband's death.",
  o:["compensate","persecute","alienate","inspect"],
  why:"He offers the widow something \"generously\" and hopes \"money\" will ease his guilt, so he is paying her for her loss."}
],
"accumulation": [
 {t:"Glaciers form through the gradual ______ of compacted snow layers that never fully melt between winters.",
  o:["accumulation","substitution","divergence","estimation"],
  why:"\"Gradual\" and \"snow layers that never fully melt\" describe snow slowly building up over many winters."},
 {t:"City officials blamed flooding on the ______ of debris clogging storm drains after the prolonged rainy season.",
  o:["accumulation","initiation","projection","abstraction"],
  why:"Debris that ends up \"clogging storm drains\" after a long rainy season has piled up over time."}
],
"substitution": [
 {t:"Chemists achieved the reaction through the ______ of a chlorine atom for hydrogen, altering the compound's properties without changing its basic structure.",
  o:["substitution","accumulation","initiation","approximation"],
  why:"The pattern \"of a chlorine atom for hydrogen\" shows one atom being put in place of another."},
 {t:"City planners proposed the ______ of electric buses for diesel ones, hoping to cut emissions without disrupting commuter schedules.",
  o:["substitution","differentiation","estimation","divergence"],
  why:"\"Electric buses for diesel ones\" describes replacing one kind of bus with another."}
],
"tolerate": [
 {t:"Residents said they could no longer ______ the constant construction noise disrupting their sleep every single night.",
  o:["tolerate","facilitate","simulate","validate"],
  why:"\"Could no longer\" and noise \"disrupting their sleep\" show residents are done putting up with something unpleasant."},
 {t:"Psychologists noted that infants exposed gradually to allergens sometimes learn to ______ substances that once triggered severe reactions.",
  o:["tolerate","contaminate","dispense","exaggerate"],
  why:"Gradual exposure lets infants handle substances that \"once triggered severe reactions\" without being harmed."}
],
"proponent": [
 {t:"The economist became a leading ______ of universal basic income, publishing studies to counter critics' persistent objections.",
  o:["proponent","justification","corollary","generalization"],
  why:"The economist is a person \"publishing studies to counter critics' persistent objections,\" which is what a supporter of an idea does."},
 {t:"The mayor, a ______ of expanded bike lanes, argued the change would reduce congestion despite drivers' loud complaints.",
  o:["proponent","contradiction","projection","periodical"],
  why:"The mayor \"argued the change would reduce congestion\" despite complaints, so the mayor is someone who supports bike lanes."}
],
"approximate": [
 {t:"Historians offer only an ______ count of casualties from the siege, since surviving records were incomplete and often exaggerated.",
  o:["approximate","infallible","exorbitant","eloquent"],
  why:"\"Only\" and records that were \"incomplete and often exaggerated\" mean the count is close but not exact."},
 {t:"Medieval calendar makers tried to ______ the solar year using imperfect instruments, leading to gradual drift in their dates.",
  o:["approximate","accelerate","liberate","contradict"],
  why:"With \"imperfect instruments\" and \"gradual drift,\" the calendar makers could only come close to the true solar year."}
],
"trivial": [
 {t:"Compared to the looming extinction crisis, the biologist argued, arguments over taxonomic labels were ______ and distracted from urgent conservation work.",
  o:["trivial","momentous","indispensable","instructive"],
  why:"\"Compared to the looming extinction crisis,\" the label arguments are minor and only \"distracted from urgent conservation work.\""},
 {t:"Court chroniclers dismissed the peasant's complaint as ______, unworthy of the king's attention amid weightier matters of war and succession.",
  o:["trivial","grievous","conclusive","consequential"],
  why:"\"Dismissed,\" \"unworthy of the king's attention,\" and \"weightier matters\" show the complaint was treated as unimportant."}
],
"dependence": [
 {t:"The colony's ______ on imported grain became disastrous once naval blockades cut off the shipping routes that had sustained it for decades.",
  o:["dependence","objection","estimation","variance"],
  why:"The imported grain had \"sustained\" the colony, so losing the shipping routes was \"disastrous\": the colony relied on it."},
 {t:"Engineers warn that the region's ______ on one aging power plant leaves millions vulnerable whenever even minor equipment failures occur.",
  o:["dependence","inference","disturbance","deviation"],
  why:"Having only \"one aging power plant\" leaves millions \"vulnerable,\" which shows the region relies on it."}
],
"implicit": [
 {t:"Though the treaty never mentioned reparations, an ______ understanding existed that the defeated nation would eventually compensate its former colonies.",
  o:["implicit","exorbitant","inquisitive","impulsive"],
  why:"\"Though the treaty never mentioned reparations\" signals an understanding that was assumed without being stated."},
 {t:"The apprentice's ______ trust in his master allowed the old painter to guide his hand without a single word of protest.",
  o:["implicit","conditional","incredulous","argumentative"],
  why:"\"Without a single word of protest\" shows the apprentice's trust was complete and unquestioning."}
],
"mediate": [
 {t:"A neutral bishop was chosen to ______ between the warring dukes, hoping his authority could secure a truce before the harvest failed.",
  o:["mediate","retaliate","speculate","differentiate"],
  why:"A \"neutral\" figure stepping \"between the warring dukes\" to \"secure a truce\" is helping two sides reach an agreement."},
 {t:"Researchers found that self-esteem appears to ______ the link between criticism and withdrawal, explaining why the same insult affects people so differently.",
  o:["mediate","simulate","reiterate","dispense"],
  why:"Self-esteem sits in the middle of \"the link between criticism and withdrawal,\" explaining why the same insult affects people differently."}
],
"initiation": [
 {t:"The ______ of the chemical reaction required a spark of energy, after which the process continued on its own without further input.",
  o:["initiation","substitution","approximation","justification"],
  why:"A \"spark of energy\" was needed first, \"after which the process continued,\" so the word names the start of the reaction."},
 {t:"Young warriors in the ancient society underwent a grueling ______, complete with fasting and trials, before being accepted as full members.",
  o:["initiation","correspondence","deviation","generalization"],
  why:"\"Fasting and trials\" completed \"before being accepted as full members\" describe a ceremony of admission into a group."}
],
"buttress": [
 {t:"The geologist ______ her theory about the ancient flood by pointing to sediment layers found miles from any current river.",
  o:["buttressed","concealed","dictated","mitigated"],
  why:"\"By pointing to sediment layers\" shows she used evidence to strengthen her theory."},
 {t:"Engineers added a stone ______ to the cathedral wall, allowing the structure to bear the immense weight of its soaring roof.",
  o:["buttress","fracture","scripture","corollary"],
  why:"Something made of stone, added \"to the cathedral wall\" so it can \"bear the immense weight,\" is a supporting structure."}
],
"devotion": [
 {t:"The monk's ______ to his order never wavered, even as war and famine threatened to scatter the community he loved.",
  o:["devotion","objection","correspondence","indifference"],
  why:"It \"never wavered\" and was directed at \"the community he loved,\" which signals deep loyalty."},
 {t:"Volunteers' ______ to the flood relief effort kept supplies moving long after news cameras had left the region.",
  o:["devotion","resentment","initiation","distraction"],
  why:"The volunteers \"kept supplies moving long after news cameras had left,\" which shows lasting commitment."}
],
"thrive": [
 {t:"In the shallow pond, the bacteria ______ in the warm, nutrient-rich water, multiplying rapidly until the surface turned a cloudy green.",
  o:["thrived","languished","dissolved","conformed"],
  why:"\"Warm, nutrient-rich water\" and \"multiplying rapidly\" show the bacteria grew strongly."},
 {t:"Against every expectation, the orphan in the story ______ once she escapes the cruel household and finds true friends.",
  o:["thrives","languishes","intervenes","speculates"],
  why:"\"Against every expectation\" and escaping to find \"true friends\" point to the orphan doing well."}
],
"dictate": [
 {t:"The conquering general summoned the defeated council and began to ______ the terms of surrender, allowing them no voice in the negotiations.",
  o:["dictate","concede","mitigate","conceal"],
  why:"A \"conquering general\" who allows the council \"no voice in the negotiations\" is laying down terms with authority."},
 {t:"Geography often seemed to ______ the fate of ancient settlements, as rivers and mountain passes determined which cities grew wealthy and which withered.",
  o:["dictate","simulate","tolerate","contradict"],
  why:"The second half says rivers and passes \"determined which cities grew wealthy,\" so geography controlled their fate."}
],
"affirm": [
 {t:"Facing accusations of treason, the exiled senator rose before the assembly to ______ his loyalty to Rome, despite the risk of execution.",
  o:["affirm","conceal","contemplate","obtain"],
  why:"Accused of treason, he \"rose before the assembly\" to state his loyalty firmly and publicly."},
 {t:"A second follow-up study helped ______ earlier findings that tending community gardens can meaningfully reduce residents' neighborhood stress levels.",
  o:["affirm","precede","originate","conceive"],
  why:"A \"second follow-up study\" that agrees with \"earlier findings\" helps confirm them."}
],
"comparative": [
 {t:"Analysts published a ______ review of electric and gasoline vehicles, weighing their costs, emissions, and maintenance needs against each other.",
  o:["comparative","figurative","prophetic","conditional"],
  why:"A review of \"electric and gasoline vehicles\" that weighs them \"against each other\" is built on comparison."},
 {t:"Despite the war's devastation, the nation enjoyed a ______ calm afterward, with far fewer uprisings than its unstable neighbors experienced.",
  o:["comparative","tumultuous","strenuous","deficient"],
  why:"The calm is measured against others: \"far fewer uprisings than its unstable neighbors experienced.\""}
],
"approximation": [
 {t:"Lacking precise records, the chronicler offered only an ______ of the army's size, admitting his count might be off by thousands.",
  o:["approximation","abstraction","occurrence","initiation"],
  why:"\"Lacking precise records\" and a count that \"might be off by thousands\" describe a figure that is close but not exact."},
 {t:"Survey researchers caution that reported income levels are often just an ______, since respondents tend to round their answers.",
  o:["approximation","objection","accumulation","utterance"],
  why:"Respondents \"tend to round their answers,\" so the reported incomes are only close to the real ones."}
],
"converge": [
 {t:"In the experiment, beams of light ______ at a single point after passing through the curved lens, forming a bright, sharp spot.",
  o:["converge","disperse","originate","persist"],
  why:"Beams meeting \"at a single point\" after passing through the lens are coming together."},
 {t:"As the novel progresses, the narrator's cynical voice and the idealistic hero's outlook slowly ______, until their once-opposing views become nearly indistinguishable.",
  o:["converge","fracture","intensify","languish"],
  why:"\"Once-opposing views become nearly indistinguishable\" means the two outlooks grow alike."}
],
"conceptualize": [
 {t:"Economists often ______ trust as an invisible currency, something spent and earned in every transaction even though it never appears on a balance sheet.",
  o:["conceptualize","validate","accumulate","mitigate"],
  why:"Treating trust \"as an invisible currency\" that \"never appears on a balance sheet\" is a way of forming an idea of it."},
 {t:"Ancient astronomers struggled to ______ a universe without a fixed center, since every visible star seemed to circle steadily around their own world.",
  o:["conceptualize","dictate","circulate","reinstate"],
  why:"Every star \"seemed to circle steadily around their own world,\" so a universe with no center was hard for them to picture."}
],
"confound": [
 {t:"The unexpected results ______ the chemists, who had predicted a stable compound yet watched it break apart within minutes under ordinary room temperature.",
  o:["confounded","reassured","validated","confined"],
  why:"The results were \"unexpected\" and the chemists \"had predicted\" the opposite, so they were baffled."},
 {t:"Early chroniclers often ______ two rulers who shared the same name, blending their separate reigns into a single, mistakenly continuous story.",
  o:["confounded","differentiated","persecuted","reinstated"],
  why:"Rulers who \"shared the same name\" were blended \"into a single, mistakenly continuous story,\" meaning they were mixed up."}
],
"ponder": [
 {t:"After recording the unusual readings, the astronomer sat quietly, ______ whether the faint signal could be evidence of a previously unknown planet.",
  o:["pondering","affirming","dictating","concealing"],
  why:"He \"sat quietly\" over an open question, \"whether the faint signal could be\" a planet, which describes long, careful thought."},
 {t:"Before casting her vote, the councilwoman ______ the proposal carefully, weighing its promised benefits against its considerable cost to taxpayers.",
  o:["pondered","exaggerated","reinstated","dissolved"],
  why:"\"Carefully\" and \"weighing its promised benefits against its considerable cost\" describe thinking something over at length."}
],
"denote": [
 {t:"On updated flood maps, shaded blue zones ______ areas where rising waters are expected to threaten homes within the coming decades.",
  o:["denote","mitigate","contaminate","precede"],
  why:"On a map, \"shaded blue zones\" are a sign that marks where flooding is expected."},
 {t:"Economists use the term 'liquidity' to ______ how quickly an asset can be converted into cash without losing value.",
  o:["denote","accelerate","facilitate","validate"],
  why:"\"Use the term 'liquidity' to\" introduces what the word means, and a definition follows."}
],
"arbitrary": [
 {t:"The committee criticized the experiment's ______ cutoff temperature, noting that the researcher had chosen the value without any theoretical justification.",
  o:["arbitrary","empirical","methodical","logical"],
  why:"The value was \"chosen ... without any theoretical justification,\" which is what the committee criticized."},
 {t:"Critics argue the platform's content moderation feels ______, since similar posts are sometimes removed and sometimes left untouched for no clear reason.",
  o:["arbitrary","systematic","impartial","inflexible"],
  why:"Similar posts are \"sometimes removed and sometimes left untouched for no clear reason,\" so the decisions seem random."}
],
"conception": [
 {t:"Before microscopes existed, scientists had only a vague ______ of how tiny organisms could cause widespread disease.",
  o:["conception","contradiction","prevalence","substitution"],
  why:"\"Before microscopes existed\" and \"only a vague\" point to a rough idea of how germs cause disease."},
 {t:"The ______ of a unified currency for the fledgling nation began years before the first coin was ever minted.",
  o:["conception","instability","antiquity","absorption"],
  why:"It \"began years before the first coin was ever minted,\" so the word names the forming of the plan."}
],
"competent": [
 {t:"The lab assistant, though newly hired, was ______ enough to run the delicate titration without spilling a single drop.",
  o:["competent","negligent","impulsive","complacent"],
  why:"\"Though newly hired,\" the assistant could run a \"delicate titration without spilling a single drop,\" which shows real skill."},
 {t:"The guild required apprentices to complete years of supervised work before certifying them as ______ craftsmen able to sell their own goods.",
  o:["competent","deficient","rebellious","expectant"],
  why:"Certification came only after \"years of supervised work,\" so the craftsmen had proven their skill."}
],
"incoherent": [
 {t:"Under extreme stress, the interview subject's answers became ______, drifting from topic to topic without any logical thread connecting them.",
  o:["incoherent","methodical","emphatic","articulate"],
  why:"Answers \"drifting from topic to topic without any logical thread\" are not logically connected."},
 {t:"Radio static rendered the satellite's transmission ______, forcing engineers to discard the garbled data and wait for a cleaner signal.",
  o:["incoherent","instantaneous","conspicuous","authoritative"],
  why:"\"Radio static\" and \"garbled data\" that had to be discarded show the transmission could not be understood."}
],
"indulgent": [
 {t:"Psychologists warn that ______ parenting, which rarely enforces limits, can leave children unprepared to handle disappointment later in life.",
  o:["indulgent","tyrannical","inflexible","vigilant"],
  why:"Parenting that \"rarely enforces limits\" gives children what they want too easily."},
 {t:"Once retired, the general lived an ______ life, spending his pension on rich feasts and idle luxury rather than public service.",
  o:["indulgent","industrious","exemplary","apprehensive"],
  why:"\"Rich feasts and idle luxury rather than public service\" describe a life of allowing oneself too much pleasure."}
],
"irritable": [
 {t:"After weeks of marching without rest, the troops grew ______, snapping at officers over the smallest delays in supply.",
  o:["irritable","complacent","submissive","appreciative"],
  why:"Exhausted troops \"snapping at officers over the smallest delays\" are easily annoyed."},
 {t:"Researchers found that participants deprived of caffeine grew ______ within hours, snapping at minor inconveniences they normally ignored.",
  o:["irritable","oblivious","considerate","meditative"],
  why:"They were \"snapping at minor inconveniences they normally ignored,\" a sign of being easily annoyed."}
],
"tolerable": [
 {t:"Despite the cramped cabin, the exiled prince decided the voyage was ______, comforted by the thought of eventual freedom ashore.",
  o:["tolerable","oppressive","perilous","tedious"],
  why:"\"Despite the cramped cabin\" and \"comforted by the thought of eventual freedom\" show he found the voyage bearable."},
 {t:"The survey rated the new workplace policy as ______, with employees generally satisfied though far from enthusiastic about the changes.",
  o:["tolerable","exemplary","objectionable","inexcusable"],
  why:"\"Generally satisfied though far from enthusiastic\" describes something fairly good but not excellent."}
],
"resolute": [
 {t:"Despite dwindling supplies and mounting casualties, the besieged garrison's commander remained ______, refusing every offer of surrender from the surrounding army.",
  o:["resolute","submissive","impulsive","expectant"],
  why:"\"Despite dwindling supplies,\" he kept \"refusing every offer of surrender,\" which shows firm determination."},
 {t:"City officials remained ______ about the recycling mandate, refusing to delay enforcement despite loud complaints from local business owners.",
  o:["resolute","incredulous","indifferent","apologetic"],
  why:"Officials were \"refusing to delay enforcement despite loud complaints,\" so they did not waver."}
],
"unspeakable": [
 {t:"The chronicler recorded that the invading army committed ______ acts against the villagers, details so grim that later scribes refused to repeat them.",
  o:["unspeakable","justifiable","trivial","benevolent"],
  why:"The details were \"so grim that later scribes refused to repeat them,\" meaning too terrible to put into words."},
 {t:"The narrator hints at some ______ tragedy in her past, one so painful that she changes the subject whenever it is mentioned.",
  o:["unspeakable","conspicuous","whimsical","proverbial"],
  why:"It is \"so painful that she changes the subject whenever it is mentioned,\" so she cannot talk about it."}
],
"momentary": [
 {t:"The treaty brought only ______ peace, as skirmishes along the border resumed within weeks despite the signed ceasefire agreement.",
  o:["momentary","incessant","indestructible","conclusive"],
  why:"\"Only\" and \"skirmishes ... resumed within weeks\" show the peace lasted a very short time."},
 {t:"The chemical reaction produced a ______ flash of blue light, gone almost instantly before the solution settled into its usual color.",
  o:["momentary","monotonous","laborious","stagnant"],
  why:"The flash was \"gone almost instantly,\" so it lasted only a moment."}
],
"irritate": [
 {t:"The younger brother's constant humming began to ______ the narrator, who finally slammed the book shut and stormed outside.",
  o:["irritate","reassure","intrigue","liberate"],
  why:"The \"constant humming\" ends with the narrator slamming the book shut and storming out, a sign of annoyance."},
 {t:"Sociologists studying factory conditions found that fine airborne fibers ______ workers' lungs over years of exposure, a physical toll often hidden behind productivity statistics.",
  o:["irritate","cultivate","elevate","reinstate"],
  why:"\"Fine airborne fibers\" in the lungs and \"a physical toll\" over years point to making the lungs sore or inflamed."}
],
"inseparable": [
 {t:"Researchers argue that language and identity are ______, since losing one's native tongue often feels, to the speaker, like losing part of who they are.",
  o:["inseparable","contradictory","arbitrary","superfluous"],
  why:"Losing one's language feels like \"losing part of who they are,\" so the two cannot be pulled apart."},
 {t:"A lichen is ______ from its two components, since the fungus and alga rely on each other so completely that neither can survive or be studied alone.",
  o:["inseparable","distinguishable","inaccessible","irrelevant"],
  why:"The fungus and alga rely on each other \"so completely that neither can survive or be studied alone.\""}
],
"destitute": [
 {t:"After the famine spread across the province, thousands of farmers were left ______, unable to afford grain, shelter, or even basic medicine for their children.",
  o:["destitute","complacent","extravagant","industrious"],
  why:"After the famine, they were \"unable to afford grain, shelter, or even basic medicine,\" which describes extreme poverty."},
 {t:"The proposed reform plan was ______ of any real funding mechanism, leaving lawmakers with lofty promises but no practical way to pay for them.",
  o:["destitute","suggestive","appreciative","expressive"],
  why:"Lawmakers had \"no practical way to pay,\" so the plan completely lacked a funding mechanism."}
],
"instantaneous": [
 {t:"When the two chemicals mixed, the reaction was ______, producing a burst of heat and light before the scientist could even step back.",
  o:["instantaneous","laborious","infrequent","uneventful"],
  why:"The burst came \"before the scientist could even step back,\" so the reaction happened immediately."},
 {t:"When the power grid failed, the backup generators provided ______ electricity, so hospital equipment never lost function even for a single second.",
  o:["instantaneous","momentary","superfluous","approximate"],
  why:"Equipment \"never lost function even for a single second,\" so the power came on with no delay."}
],
"sympathize": [
 {t:"Neighbors ______ with the family displaced by the highway expansion, organizing donations after hearing how suddenly they had lost their longtime home.",
  o:["sympathized","conformed","speculated","persisted"],
  why:"Neighbors were \"organizing donations after hearing\" what the family had lost, which shows they felt for them."},
 {t:"Several officials secretly ______ with the rebels' cause, quietly supplying maps and supplies even while publicly pledging loyalty to the crown.",
  o:["sympathized","dispensed","retaliated","meditated"],
  why:"\"Secretly\" and \"quietly supplying maps and supplies\" show the officials privately supported the rebels' cause."}
],
"mischievous": [
 {t:"The narrator's little brother was ______, hiding her diary under the porch just to watch her search frantically all afternoon.",
  o:["mischievous","conscientious","considerate","meditative"],
  why:"Hiding the diary \"just to watch her search frantically\" is playful troublemaking."},
 {t:"The sprite in the play is genuinely ______, luring travelers into swamps and wrecking their carts merely to enjoy their misery.",
  o:["mischievous","benevolent","hospitable","industrious"],
  why:"\"Luring travelers into swamps and wrecking their carts merely to enjoy their misery\" is deliberately harmful behavior."}
],
"unsatisfactory": [
 {t:"The initial soil samples were ______, containing too much contamination for the botanists to draw any reliable conclusions about growth.",
  o:["unsatisfactory","exemplary","conclusive","indispensable"],
  why:"The samples had \"too much contamination\" for \"any reliable conclusions,\" so they were not good enough."},
 {t:"Reviewers called the app's customer support ______, complaining that tickets sat unanswered for weeks despite promises of quick responses.",
  o:["unsatisfactory","attentive","infallible","extravagant"],
  why:"Reviewers were \"complaining that tickets sat unanswered for weeks,\" so the support was not acceptable."}
],
"proportionate": [
 {t:"Engineers ensured the bridge's support cables were ______ to its length, so longer spans received thicker cables to bear the load.",
  o:["proportionate","susceptible","submissive","liable"],
  why:"\"Longer spans received thicker cables\" means cable size corresponded to the bridge's length."},
 {t:"Regulators argued that fines for pollution should be ______ to the damage caused, rather than a flat fee regardless of harm.",
  o:["proportionate","oblivious","inaccessible","indifferent"],
  why:"The contrast with \"a flat fee regardless of harm\" shows fines should match the amount of damage."}
],
"instinctive": [
 {t:"The fawn's ______ freeze at the scent of a predator happened before it could ever have learned the danger consciously.",
  o:["instinctive","methodical","laborious","inquisitive"],
  why:"The freeze happened \"before it could ever have learned the danger consciously,\" so it came from natural impulse."},
 {t:"Economists note that panic selling during a crash is often ______, driven by fear rather than any careful analysis of value.",
  o:["instinctive","systematic","prudential","empirical"],
  why:"The selling is \"driven by fear rather than any careful analysis,\" meaning it happens without thinking."}
],
"apprehensive": [
 {t:"As enemy forces massed beyond the river, the town council grew ______, fearing an invasion they had no means to repel.",
  o:["apprehensive","complacent","triumphant","indifferent"],
  why:"With enemy forces massing, the council was \"fearing an invasion they had no means to repel.\""},
 {t:"Local farmers are ______ about the new trade rules, worried that unfamiliar regulations could shrink their already narrow profit margins.",
  o:["apprehensive","impartial","incredulous","apologetic"],
  why:"The farmers are \"worried that unfamiliar regulations could shrink\" their profits, so they are anxious about what is coming."}
],
"innumerable": [
 {t:"Beneath the microscope, the pond water revealed ______ organisms, a teeming multitude that defied any attempt at a precise count.",
  o:["innumerable","infrequent","inanimate","numerical"],
  why:"\"A teeming multitude that defied any attempt at a precise count\" means too many to count."},
 {t:"The fallen empire left behind ______ ruins scattered across the continent, far too many for archaeologists to excavate in a lifetime.",
  o:["innumerable","momentary","comparative","deficient"],
  why:"\"Far too many for archaeologists to excavate in a lifetime\" signals a number beyond counting."}
],
"incomprehensible": [
 {t:"The raw output from the particle detector was ______ until researchers translated the tangled signals into a readable graph.",
  o:["incomprehensible","instructive","persuasive","conclusive"],
  why:"The \"tangled signals\" had to be \"translated ... into a readable graph\" before anyone could understand them."},
 {t:"The city's new zoning code proved ______ to most residents, prompting officials to publish a simplified summary online.",
  o:["incomprehensible","intelligible","agreeable","irrelevant"],
  why:"Officials had to \"publish a simplified summary,\" so residents could not understand the original code."}
],
"incessant": [
 {t:"The siege dragged on through ______ bombardment, with cannon fire echoing over the walls day and night without a single lull.",
  o:["incessant","infrequent","momentary","harmonious"],
  why:"Cannon fire went on \"day and night without a single lull,\" so the bombardment never paused."},
 {t:"Residents near the airport have complained for years about ______ noise, saying the roar of departing planes never truly stops.",
  o:["incessant","periodical","tolerable","spontaneous"],
  why:"Residents say the roar of planes \"never truly stops,\" which means the noise is continuous."}
],
"desolate": [
 {t:"Satellite images revealed a ______ stretch of desert where no plants, animals, or standing water could be found for miles.",
  o:["desolate","populous","hospitable","harmonious"],
  why:"\"No plants, animals, or standing water could be found for miles\" describes an empty, lifeless place."},
 {t:"Left alone in the drafty manor after her sisters married, Eleanor felt ______, her days emptied of laughter or company.",
  o:["desolate","triumphant","boisterous","appreciative"],
  why:"\"Left alone\" with \"her days emptied of laughter or company,\" Eleanor felt deeply lonely and unhappy."}
],
"intolerable": [
 {t:"Inside the sealed chamber, the heat grew ______ within minutes, forcing researchers to abandon the experiment before it finished.",
  o:["intolerable","agreeable","trivial","infrequent"],
  why:"The heat was \"forcing researchers to abandon the experiment,\" so it was too much to endure."},
 {t:"The silence in the abandoned house grew ______ to the narrator, who began talking aloud just to hear a voice.",
  o:["intolerable","pleasurable","intelligible","indispensable"],
  why:"The narrator \"began talking aloud just to hear a voice,\" which shows the silence could not be endured."}
],
"precede": [
 {t:"Public hearings must ______ any major zoning change, giving residents a chance to voice concerns before decisions are finalized.",
  o:["precede","preclude","simulate","surpass"],
  why:"Residents voice concerns \"before decisions are finalized,\" so the hearings have to come first."},
 {t:"Tremors frequently ______ volcanic eruptions, giving geologists a narrow window to warn nearby communities of potential danger.",
  o:["precede","conceal","withstand","dissolve"],
  why:"Tremors give geologists \"a narrow window to warn\" people, so they must come before the eruption."}
],
"consequent": [
 {t:"The glacier melted rapidly, and the ______ rise in sea level threatened several low-lying coastal habitats nearby.",
  o:["consequent","stagnant","symbolic","unprofitable"],
  why:"The glacier \"melted rapidly,\" and the rise in sea level followed as a result of that melting."},
 {t:"Crop failures swept the region, and the ______ famine forced entire villages to migrate toward the coast.",
  o:["consequent","preparatory","figurative","agreeable"],
  why:"\"Crop failures swept the region\" first, and the famine followed as their result."}
],
"grievous": [
 {t:"Marine biologists warned that the coral reef had sustained ______ damage, its structure so shattered that recovery could take decades.",
  o:["grievous","trivial","superfluous","momentary"],
  why:"The reef was \"so shattered that recovery could take decades,\" which describes very severe damage."},
 {t:"The queen's death was a ______ blow to the kingdom, plunging her subjects into a mourning so deep that festivals were canceled for a year.",
  o:["grievous","tolerable","frivolous","whimsical"],
  why:"The death plunged subjects into \"a mourning so deep that festivals were canceled for a year,\" so it caused great sorrow."}
],
"empirical": [
 {t:"The astronomer built his theory on ______ data, carefully recording each planet's position night after night instead of relying on inherited assumptions.",
  o:["empirical","metaphysical","proverbial","fantastical"],
  why:"He was \"carefully recording each planet's position night after night\" rather than trusting assumptions, so the data came from observation."},
 {t:"Economists prefer ______ studies that track actual spending habits over time, rather than models built solely on abstract assumptions about behavior.",
  o:["empirical","philosophical","subjective","figurative"],
  why:"Studies that \"track actual spending habits\" are contrasted with models built on \"abstract assumptions,\" pointing to observation over theory."}
],
"agreeable": [
 {t:"Travelers crossing the valley found the climate remarkably ______, mild enough that farmers could grow crops nearly year-round.",
  o:["agreeable","oppressive","turbulent","treacherous"],
  why:"\"Mild enough that farmers could grow crops nearly year-round\" describes a pleasant climate."},
 {t:"After weeks of negotiation, the rival chieftains finally proved ______ to a truce, ending the raids that had plagued both villages.",
  o:["agreeable","irrelevant","incredulous","inflexible"],
  why:"\"After weeks of negotiation\" the chieftains \"finally\" accepted a truce, so they became willing to agree."}
],
"complacent": [
 {t:"Having repelled the first invasion, the city's leaders grew ______, ignoring warnings of a second attack until enemy ships appeared at the harbor.",
  o:["complacent","vigilant","apprehensive","diligent"],
  why:"After one victory, the leaders were \"ignoring warnings of a second attack,\" too satisfied to notice the danger."},
 {t:"Engineers warned against becoming ______ about the bridge's stability, since ignoring small cracks now could lead to catastrophic failure later.",
  o:["complacent","attentive","conscientious","inquisitive"],
  why:"The warning is about \"ignoring small cracks now,\" which is what people do when they feel too comfortable to see a danger."}
],
"exaggerate": [
 {t:"Ambassadors returning from the frontier tended to ______ the size of enemy forces, inflating modest raiding parties into full invading armies.",
  o:["exaggerate","validate","conceal","simplify"],
  why:"The ambassadors were \"inflating modest raiding parties into full invading armies,\" so they made the enemy seem bigger than it really was."},
 {t:"Survey respondents sometimes ______ their own generosity, reporting donations far larger than the modest amounts their bank records actually show.",
  o:["exaggerate","undermine","contemplate","reciprocate"],
  why:"Respondents report donations \"far larger\" than what their bank records show, so they overstate how generous they are."}
],
"strenuous": [
 {t:"Climbing to the summit without oxygen is so ______ that even seasoned mountaineers must rest every few steps.",
  o:["strenuous","tolerable","spontaneous","uneventful"],
  why:"A climb so hard that \"even seasoned mountaineers must rest every few steps\" demands enormous physical effort."},
 {t:"Advocacy groups launched a ______ push for wage reform, refusing to soften their demands despite pressure from employers.",
  o:["strenuous","submissive","momentary","frivolous"],
  why:"The groups kept \"refusing to soften their demands despite pressure,\" which shows a forceful, determined campaign."}
],
"humiliate": [
 {t:"After losing the decisive battle, the general was ______ before his own troops, stripped of rank in a public ceremony.",
  o:["humiliated","reinstated","validated","elevated"],
  why:"Being \"stripped of rank in a public ceremony\" in front of his own troops would make the general feel deeply ashamed."},
 {t:"The jester's biting joke ______ the vain courtier, whose face reddened as the entire court burst into laughter.",
  o:["humiliated","reassured","deceived","liberated"],
  why:"The courtier's \"face reddened as the entire court burst into laughter,\" showing the joke made him feel ashamed and foolish."}
],
"objectionable": [
 {t:"Residents called the factory's toxic runoff ______, demanding regulators intervene before the contamination spread further into local waterways.",
  o:["objectionable","tolerable","inexplicable","unimportant"],
  why:"Residents were \"demanding regulators intervene\" over toxic runoff, so they clearly considered it unacceptable."},
 {t:"Critics found the app's data-sharing policy ______, arguing that users deserved clearer consent before their information was sold.",
  o:["objectionable","exemplary","impartial","considerate"],
  why:"Critics argued that users \"deserved clearer consent,\" which shows they found the policy unacceptable."}
],
"impenetrable": [
 {t:"The turtle's shell proved ______ to the predator's jaws, its layered keratin plates absorbing bite force without cracking or splitting.",
  o:["impenetrable","susceptible","irrelevant","comparable"],
  why:"The shell absorbed the bite \"without cracking or splitting,\" so the predator's jaws could not get through it."},
 {t:"Scholars long considered the ancient scribe's shorthand ______, its cryptic symbols resisting translation until a bilingual tablet finally revealed their meaning.",
  o:["impenetrable","intelligible","erroneous","trivial"],
  why:"The \"cryptic symbols\" kept \"resisting translation,\" so scholars found the shorthand impossible to understand."}
],
"inconceivable": [
 {t:"Before the discovery, life surviving near boiling deep-sea vents seemed ______ to biologists trained to expect such heat to be lethal.",
  o:["inconceivable","plausible","unavoidable","advantageous"],
  why:"Biologists were \"trained to expect such heat to be lethal,\" so life surviving there was something they could not imagine."},
 {t:"The heroine found it ______ that her trusted mentor could betray her, and she spent the chapter refusing to believe the evidence.",
  o:["inconceivable","logical","justifiable","unmistakable"],
  why:"She spent the chapter \"refusing to believe the evidence,\" so a betrayal by her mentor was impossible for her to imagine."}
],
"superfluous": [
 {t:"The committee flagged the new regulation as ______, since existing laws already covered every situation it was meant to address.",
  o:["superfluous","indispensable","precarious","oppressive"],
  why:"Since \"existing laws already covered every situation,\" the new regulation was not needed."},
 {t:"Engineers removed the ______ wiring from the prototype, streamlining the circuit until only essential components remained.",
  o:["superfluous","systematic","indestructible","prominent"],
  why:"The wiring was removed until \"only essential components remained,\" so it was the unnecessary extra."}
],
"absorption": [
 {t:"The sponge's rapid ______ of oil made it useful for cleaning spills before the liquid could spread across the water.",
  o:["absorption","projection","estimation","substitution"],
  why:"A sponge is useful for \"cleaning spills\" because it quickly takes the oil into itself."},
 {t:"Chroniclers described the monk's ______ in his manuscript, noting he barely looked up even when visitors entered the quiet scriptorium.",
  o:["absorption","indifference","resentment","deviation"],
  why:"The monk \"barely looked up even when visitors entered,\" showing his attention was completely held by the manuscript."}
],
"observant": [
 {t:"The young apprentice at the shipyard was ______ enough to spot a hairline crack in the hull that veteran workers had overlooked.",
  o:["observant","oblivious","impulsive","eloquent"],
  why:"The apprentice could \"spot a hairline crack\" that veteran workers \"had overlooked,\" showing a sharp eye for small details."},
 {t:"Because the therapist was so ______, she caught the tiny shift in her client's posture that revealed unspoken anxiety.",
  o:["observant","negligent","complacent","argumentative"],
  why:"She \"caught the tiny shift\" in her client's posture, which only someone who notices small details would do."}
],
"resultant": [
 {t:"The king's decision to raise taxes provoked unrest, and the ______ riots forced him to reconsider his entire fiscal policy.",
  o:["resultant","preparatory","infrequent","uneventful"],
  why:"The tax decision \"provoked unrest,\" and the riots followed as a consequence of it."},
 {t:"The glacier melted rapidly, and the ______ rise in the river's flow flooded the fields below the valley.",
  o:["resultant","improbable","conditional","comparative"],
  why:"The river's rise came directly after \"the glacier melted rapidly,\" so it was a consequence of that melting."}
],
"eloquent": [
 {t:"The astrophysicist's ______ explanation of black holes made a notoriously confusing topic feel almost simple to the audience.",
  o:["eloquent","incoherent","apologetic","tedious"],
  why:"An explanation that made \"a notoriously confusing topic feel almost simple\" must have been clear and fluent."},
 {t:"The widow's silence at the funeral, more ______ than any eulogy, revealed a sorrow too deep for words.",
  o:["eloquent","boisterous","frivolous","indifferent"],
  why:"Her silence \"revealed a sorrow too deep for words,\" so it expressed her feeling more clearly than any speech."}
],
"suggestive": [
 {t:"The unusual arrangement of stones on the hillside was ______ of an ancient ceremonial site rather than a simple farmer's wall.",
  o:["suggestive","oblivious","appreciative","apprehensive"],
  why:"The stones pointed to \"an ancient ceremonial site rather than a simple farmer's wall,\" so the arrangement hinted at that idea."},
 {t:"The poem's sparse imagery was ______ rather than explicit, letting readers imagine the storm it never directly described.",
  o:["suggestive","emphatic","conclusive","explanatory"],
  why:"The imagery is contrasted with \"explicit\" and lets readers \"imagine the storm it never directly described,\" so it only hints."}
],
"objection": [
 {t:"Residents filed an ______ with the city council, arguing that the planned high-rise would block sunlight from the neighboring community garden.",
  o:["objection","inference","estimation","abstraction"],
  why:"Residents were \"arguing that\" the high-rise would block sunlight, so they filed a formal statement of disapproval."},
 {t:"Historians note that the treaty nearly collapsed when a minor duke's public ______ to the border terms delayed ratification for several tense months.",
  o:["objection","devotion","similarity","correspondence"],
  why:"The treaty \"nearly collapsed\" and ratification was delayed, which fits a duke publicly stating his disagreement with the terms."}
],
"competence": [
 {t:"The lab director questioned the intern's ______ after several experiments produced contaminated samples, forcing the team to repeat weeks of careful work.",
  o:["competence","morality","volition","correspondence"],
  why:"Experiments that \"produced contaminated samples\" would make a director doubt the intern's ability to do the work well."},
 {t:"The city praised the volunteer crew's ______ in restoring power so quickly after the storm knocked out lines across the region.",
  o:["competence","indifference","dependence","friction"],
  why:"The crew was praised for \"restoring power so quickly,\" which shows skill at doing the job well."}
],
"scripture": [
 {t:"Medieval monks devoted their lives to copying ______ by hand, preserving sacred texts that might otherwise have been lost to fire or war.",
  o:["scripture","correspondence","antiquity","estimation"],
  why:"The monks were \"preserving sacred texts,\" so what they copied by hand was religious writing."},
 {t:"The old preacher in the novel quotes ______ from memory, weaving sacred verses into every sermon he delivers to the congregation.",
  o:["scripture","morality","abstraction","comprehension"],
  why:"A preacher who weaves \"sacred verses into every sermon\" is quoting holy writings."}
],
"occurrence": [
 {t:"City officials called the flooding a rare ______, though residents noted similar events had struck the low-lying district twice in recent years.",
  o:["occurrence","proposition","justification","abstraction"],
  why:"Residents answered that \"similar events\" had happened twice, so officials were describing the flooding as an unusual event."},
 {t:"The narrator doubts the ______ of the midnight visit altogether, wondering whether the stranger at the window was real or merely a feverish dream.",
  o:["occurrence","prevalence","connotation","substitution"],
  why:"She wonders whether the stranger was \"real or merely a feverish dream,\" so she doubts that the visit happened at all."}
],
"frivolous": [
 {t:"Reviewers rejected the proposal as ______, noting it lacked any serious methodology and seemed designed merely to amuse rather than inform.",
  o:["frivolous","authoritative","tedious","oppressive"],
  why:"The proposal \"lacked any serious methodology\" and seemed meant \"merely to amuse,\" so reviewers saw it as silly."},
 {t:"The narrator mocks her cousin's ______ obsession with ribbons and gossip, contrasting it with her own quiet devotion to serious study.",
  o:["frivolous","philosophical","conscientious","profound"],
  why:"An obsession with \"ribbons and gossip\" is contrasted with \"serious study,\" so it is being called silly and unserious."}
],
"repulsive": [
 {t:"Soldiers described the battlefield's stench as so ______ that even hardened veterans turned away, gagging, before they could bury the fallen.",
  o:["repulsive","tolerable","momentary","pleasurable"],
  why:"The stench made \"even hardened veterans\" turn away \"gagging,\" so it caused strong disgust."},
 {t:"In the novel, the miser's ______ greed disgusts even his own family, driving them to abandon his crumbling, rat-infested mansion entirely.",
  o:["repulsive","enviable","justifiable","infrequent"],
  why:"His greed \"disgusts even his own family\" and drives them away, so it causes strong dislike."}
],
"theorize": [
 {t:"Astronomers ______ that the dim signal originates from a distant collapsing star, though no telescope has yet confirmed the source.",
  o:["theorize","corroborate","simulate","tolerate"],
  why:"Because \"no telescope has yet confirmed the source,\" the astronomers are only offering an unproven explanation."},
 {t:"The poem's speaker ______ that grief reshapes memory itself, though she admits, almost apologetically, that she cannot prove such a claim.",
  o:["theorizes","validates","conceals","dictates"],
  why:"She admits that \"she cannot prove such a claim,\" so she is proposing an idea without firm proof."}
],
"virtuous": [
 {t:"The reformer was remembered as ______ for returning bribes untouched, a rare integrity that earned trust even among his political rivals.",
  o:["virtuous","unscrupulous","capricious","extravagant"],
  why:"\"Returning bribes untouched\" is called \"a rare integrity,\" which signals high moral standards."},
 {t:"Unlike his scheming brother, the younger prince in the play remains ______, honoring his promises even when breaking them would be easy.",
  o:["virtuous","treacherous","insolent","vindictive"],
  why:"\"Unlike his scheming brother,\" the prince keeps \"honoring his promises,\" so he stays morally good."}
],
"diligent": [
 {t:"City auditors were ______, tracing every disputed invoice line by line until the missing funds were finally located.",
  o:["diligent","negligent","impulsive","complacent"],
  why:"The auditors traced \"every disputed invoice line by line\" until the funds were found, showing steady, careful effort."},
 {t:"Ancient monks proved ______ scribes, patiently copying manuscripts letter by letter through long winters rather than rushing to finish early.",
  o:["diligent","capricious","indifferent","boisterous"],
  why:"The monks worked \"patiently\" and \"letter by letter\" instead of rushing, which shows careful, steady effort."}
],
"systematic": [
 {t:"Ecologists conducted a ______ survey, walking evenly spaced transects through the forest instead of wandering wherever seemed interesting.",
  o:["systematic","spontaneous","capricious","figurative"],
  why:"Walking \"evenly spaced transects\" instead of \"wandering wherever seemed interesting\" means the survey followed a fixed plan."},
 {t:"The startup adopted a ______ hiring process, scoring every candidate on identical criteria instead of trusting gut instinct.",
  o:["systematic","subjective","whimsical","precarious"],
  why:"Scoring every candidate \"on identical criteria instead of trusting gut instinct\" describes a process that follows a fixed method."}
],
"corollary": [
 {t:"Rising grain prices were a direct ______ of the drought, since fewer harvests meant merchants could charge desperate buyers more.",
  o:["corollary","contradiction","proponent","generalization"],
  why:"The \"since\" clause explains how fewer harvests led to higher prices, so the prices were a natural result of the drought."},
 {t:"Economists note that inflation is often a ______ of rapid wage growth, since businesses raise prices to cover higher payroll costs.",
  o:["corollary","substitution","designation","deviation"],
  why:"Businesses \"raise prices to cover higher payroll costs,\" so inflation follows naturally from wage growth."}
],
"courteous": [
 {t:"Though the butler despised his master, he remained outwardly ______, bowing crisply and never letting his resentment slip into his tone.",
  o:["courteous","insolent","indignant","rebellious"],
  why:"\"Bowing crisply\" and never letting resentment \"slip into his tone\" shows he stayed polite on the surface."},
 {t:"Even during heated town hall debates, the moderator asked residents to remain ______, waiting their turn instead of shouting over one another.",
  o:["courteous","argumentative","boisterous","emphatic"],
  why:"\"Waiting their turn instead of shouting over one another\" describes polite, respectful behavior."}
],
"indiscriminate": [
 {t:"The retreating general ordered an ______ burning of villages, torching homes of loyal subjects and rebels alike without distinguishing between them.",
  o:["indiscriminate","infrequent","involuntary","apologetic"],
  why:"Homes of \"loyal subjects and rebels alike\" were burned \"without distinguishing between them,\" so no careful choice was made."},
 {t:"The farmer's ______ spraying of pesticide killed pollinating bees along with the crop-eating beetles it was meant to target.",
  o:["indiscriminate","proportionate","vigilant","temperate"],
  why:"The spray killed helpful bees \"along with\" the beetles \"it was meant to target,\" so it was applied without careful selection."}
],
"superstitious": [
 {t:"The old captain in the novel was so ______ that he refused to whistle on deck, fearing it would summon a gale.",
  o:["superstitious","audacious","irritable","indifferent"],
  why:"He would not whistle, \"fearing it would summon a gale,\" a belief in bad luck with no scientific basis."},
 {t:"Sociologists examining athletes noted many remain ______, wearing the same socks for every game despite knowing the habit changes nothing.",
  o:["superstitious","incredulous","impulsive","apologetic"],
  why:"Wearing \"the same socks for every game\" even though the habit \"changes nothing\" is a belief in luck."}
],
"conscientious": [
 {t:"Managers rated the ______ employee highest, noting she never missed a deadline and double-checked every report before submission.",
  o:["conscientious","complacent","boisterous","capricious"],
  why:"She \"never missed a deadline and double-checked every report,\" which shows careful, thorough work."},
 {t:"Though tempted by the reward, the ______ knight refused to betray his friend, guided by a code he would not break.",
  o:["conscientious","unscrupulous","vindictive","frivolous"],
  why:"Though tempted, he would not betray his friend and was \"guided by a code,\" so his sense of right and wrong ruled him."}
],
"hospitable": [
 {t:"Travelers crossing the desert found the nomadic clan remarkably ______, offering food, water, and shelter to weary strangers without hesitation.",
  o:["hospitable","indifferent","insolent","apprehensive"],
  why:"The clan offered \"food, water, and shelter to weary strangers without hesitation,\" which is how welcoming hosts behave."},
 {t:"The fertile river valley proved ______ to early settlers, whose crops thrived where drier neighboring lands supported little farming at all.",
  o:["hospitable","inaccessible","oppressive","unsuitable"],
  why:"The valley was \"fertile\" and the settlers' \"crops thrived,\" so it offered favorable conditions for living."}
],
"infectious": [
 {t:"Researchers wore full protective suits, since the newly discovered pathogen proved highly ______ even in tiny airborne droplets.",
  o:["infectious","conspicuous","susceptible","temperate"],
  why:"Researchers needed \"full protective suits\" because the pathogen could spread \"even in tiny airborne droplets.\""},
 {t:"Even amid famine, the general's booming laughter was so ______ that weary soldiers soon forgot their hunger and began to smile.",
  o:["infectious","monotonous","insolent","oppressive"],
  why:"The laughter spread to the \"weary soldiers,\" who \"began to smile\" themselves."}
],
"philosophical": [
 {t:"Ancient Athenian thinkers gathered in the agora to debate ______ questions about justice, virtue, and the nature of the good life.",
  o:["philosophical","numerical","grammatical","frivolous"],
  why:"Questions about \"justice, virtue, and the nature of the good life\" are basic questions about how to live and what is true."},
 {t:"After losing the election, the aging senator grew ______, accepting defeat calmly rather than raging against the crowd that rejected him.",
  o:["philosophical","indignant","vindictive","delirious"],
  why:"He was \"accepting defeat calmly rather than raging,\" so he took the loss in a calm, accepting way."}
],
"monotonous": [
 {t:"Commuters described the new highway as ______, mile after mile of identical concrete offering no landmark to break the tedium.",
  o:["monotonous","perilous","turbulent","sumptuous"],
  why:"\"Mile after mile of identical concrete\" with nothing \"to break the tedium\" describes something dull and unvarying."},
 {t:"Chained to the galley's oars, ancient rowers endured a ______ rhythm, pulling the same stroke for hours without pause or change.",
  o:["monotonous","spontaneous","capricious","whimsical"],
  why:"The rowers pulled \"the same stroke for hours without pause or change,\" so the rhythm never varied."}
],
"perilous": [
 {t:"Rescue workers described the flooded ravine as ______, warning that sudden currents could sweep away anyone attempting a crossing.",
  o:["perilous","stagnant","habitable","desolate"],
  why:"Workers warned that \"sudden currents could sweep away anyone\" who tried to cross, so the ravine was full of danger."},
 {t:"Journalists covering the conflict zone faced a ______ assignment, dodging shellfire while trying to document the unfolding humanitarian crisis.",
  o:["perilous","tedious","lucrative","monotonous"],
  why:"\"Dodging shellfire\" in a conflict zone makes the assignment extremely dangerous."}
],
"aristocratic": [
 {t:"In the play, the ______ uncle refuses to dine with servants, insisting his noble blood demands separate tables.",
  o:["aristocratic","philanthropic","submissive","hospitable"],
  why:"He insists \"his noble blood demands separate tables,\" so he belongs to the nobility."},
 {t:"Before the revolution, ______ families held vast estates and titles that commoners were forbidden to inherit.",
  o:["aristocratic","destitute","industrious","rebellious"],
  why:"These families held \"vast estates and titles that commoners were forbidden to inherit,\" marking them as nobility."}
],
"meditate": [
 {t:"Alone by the window, the narrator ______ on her failed marriage, turning each small regret over in her mind.",
  o:["meditated","converged","thrived","intervened"],
  why:"She was \"alone by the window,\" \"turning each small regret over in her mind,\" which describes deep, quiet thinking."},
 {t:"Therapists now encourage anxious clients to ______ daily, using calming breath exercises to quiet their racing thoughts.",
  o:["meditate","speculate","migrate","accelerate"],
  why:"\"Calming breath exercises to quiet their racing thoughts\" describes a practice of focusing the mind to relax."}
],
"unmistakable": [
 {t:"His ______ limp, described in the opening chapter, let readers instantly recognize the stranger reappearing at the story's end.",
  o:["unmistakable","momentary","obscure","infrequent"],
  why:"The limp let readers \"instantly recognize the stranger,\" so it could not be confused with anyone else's."},
 {t:"Historians cite the ______ seal on the document as proof that the treaty was genuinely signed by the king.",
  o:["unmistakable","erroneous","inexplicable","indefinite"],
  why:"The seal is cited \"as proof\" the treaty was \"genuinely signed by the king,\" so it must be too clear to doubt."}
],
"harmonious": [
 {t:"The poem paints a ______ garden where birdsong, fountains, and rustling leaves blend into a single soothing melody.",
  o:["harmonious","tumultuous","desolate","stagnant"],
  why:"The garden's sounds \"blend into a single soothing melody,\" forming a pleasing, peaceful whole."},
 {t:"By the final act, the feuding siblings reach a ______ understanding, ending years of bitter quarreling between them.",
  o:["harmonious","contentious","superfluous","turbulent"],
  why:"The understanding ends \"years of bitter quarreling,\" so the siblings are finally free of disagreement."}
],
"venerable": [
 {t:"Elders of the ______ guild, honored for generations of craftsmanship, still trained apprentices in the old workshop.",
  o:["venerable","obscure","unscrupulous","rebellious"],
  why:"The guild is \"honored for generations of craftsmanship,\" so it is respected for its age and long service."},
 {t:"In the play, the ______ priest, long respected for his counsel, calmed the feuding families with a single speech.",
  o:["venerable","insolent","capricious","incoherent"],
  why:"The priest is \"long respected for his counsel,\" which matches a word for someone honored for wisdom and age."}
],
"manipulate": [
 {t:"The regent secretly ______ the young king's advisers, steering royal policy to serve her own hidden ambitions.",
  o:["manipulated","liberated","reassured","surpassed"],
  why:"She acted \"secretly,\" \"steering royal policy to serve her own hidden ambitions,\" so she was controlling the advisers unfairly."},
 {t:"The sculptor's fingers ______ the wet clay with practiced ease, coaxing a delicate figure from the shapeless lump.",
  o:["manipulated","dissolved","fractured","contaminated"],
  why:"The fingers worked the clay \"with practiced ease, coaxing a delicate figure\" from it, which describes skillful handling."}
],
"expectant": [
 {t:"The ______ crowd leaned forward as the curtain rose, certain the final act would reveal the murderer's identity.",
  o:["expectant","indifferent","oblivious","indignant"],
  why:"The crowd \"leaned forward,\" \"certain the final act would reveal\" the murderer, so they were eagerly waiting."},
 {t:"She sat by the window, ______ and restless, sure that the letter promising his return would arrive today.",
  o:["expectant","complacent","incredulous","meditative"],
  why:"She waits at the window, \"sure that the letter\" would \"arrive today,\" so she is eagerly awaiting something."}
],
"prodigious": [
 {t:"The biologist recorded the whale's ______ appetite, noting it consumed tons of krill in a single day.",
  o:["prodigious","deficient","temperate","infrequent"],
  why:"The whale \"consumed tons of krill in a single day,\" so its appetite is remarkably great."},
 {t:"The linguist documented a ______ vocabulary in the toddler, far exceeding typical milestones for her age.",
  o:["prodigious","comparable","tolerable","monotonous"],
  why:"A vocabulary \"far exceeding typical milestones for her age\" is remarkably large."}
],
"numerical": [
 {t:"The chemist converted each reaction's color change into a ______ pH value, replacing subjective impressions with a scale anyone could read and verify.",
  o:["numerical","subjective","figurative","proverbial"],
  why:"A pH value on \"a scale anyone could read and verify\" replaces impressions with a number."},
 {t:"The novel's obsessive accountant narrator described his grief only in ______ terms, listing days since the funeral as though feelings could be tallied like receipts.",
  o:["numerical","poignant","metaphysical","expressive"],
  why:"The accountant was \"listing days since the funeral\" as if feelings \"could be tallied,\" so he spoke in numbers."}
],
"improbable": [
 {t:"The narrator dismisses the letter as ______, insisting that her long-lost brother could not possibly appear at the door after twenty silent years.",
  o:["improbable","plausible","conclusive","insolent"],
  why:"She insists her brother \"could not possibly appear\" after twenty years, so she thinks the letter is unlikely to be true."},
 {t:"Analysts called the startup's swift rise ______, pointing out that it lacked funding, staff, and a working product just a year earlier.",
  o:["improbable","unavoidable","systematic","uneventful"],
  why:"A company that \"lacked funding, staff, and a working product\" a year earlier was not likely to rise so fast."}
],
"emphatic": [
 {t:"The mayor issued an ______ statement condemning the vandalism, her forceful tone leaving no ambiguity about the city's commitment to prosecuting those responsible.",
  o:["emphatic","apologetic","indefinite","incoherent"],
  why:"Her \"forceful tone leaving no ambiguity\" shows the statement was made with force and clarity."},
 {t:"The election results were ______, showing such a clear and definite majority that even skeptical historians agreed no recount could have changed the outcome.",
  o:["emphatic","circumstantial","erroneous","contentious"],
  why:"The results showed \"such a clear and definite majority\" that no recount could have changed the outcome."}
],
"inexplicable": [
 {t:"The general's ______ decision to retreat from a winning position puzzled his own officers, who could find no strategic reason for abandoning the field.",
  o:["inexplicable","justifiable","logical","systematic"],
  why:"His officers were puzzled and \"could find no strategic reason\" for the retreat, so it could not be accounted for."},
 {t:"Readings from the sensor showed an ______ spike in temperature, one that no known chemical reaction in the sealed chamber could account for.",
  o:["inexplicable","unavoidable","intelligible","unimportant"],
  why:"\"No known chemical reaction in the sealed chamber could account for\" the spike, so nobody could say what caused it."}
],
"tumultuous": [
 {t:"The town hall meeting grew ______, with residents interrupting one another so loudly that the moderator struggled to restore any order.",
  o:["tumultuous","monotonous","courteous","meditative"],
  why:"Residents were \"interrupting one another so loudly\" that the moderator \"struggled to restore any order,\" so the meeting became noisy and disorderly."},
 {t:"The decade following the empire's collapse proved ______, as rival factions seized territory and old alliances shattered within a single generation.",
  o:["tumultuous","uneventful","stagnant","lucrative"],
  why:"\"Rival factions seized territory and old alliances shattered,\" so the decade was full of conflict and upheaval."}
],
"attentive": [
 {t:"Field biologists stayed ______ for hours, watching the burrow's entrance closely to catch the rare moment the fox emerged.",
  o:["attentive","boisterous","irritable","incredulous"],
  why:"The biologists kept \"watching the burrow's entrance closely\" for hours, so they stayed focused and alert."},
 {t:"Unlike his predecessor, the young governor proved ______ to the villagers' complaints, personally visiting flooded farms before ordering any relief.",
  o:["attentive","indifferent","oblivious","inaccessible"],
  why:"He was \"personally visiting flooded farms\" in response to complaints, showing that he cared about the villagers' needs."}
],
"considerate": [
 {t:"The lead researcher was ______ of her junior colleagues, scheduling experiments around their exam periods instead of demanding late-night lab shifts.",
  o:["considerate","oblivious","incredulous","suggestive"],
  why:"She planned experiments \"around their exam periods instead of demanding late-night lab shifts,\" showing thought for her colleagues' needs."},
 {t:"Even amid his own grief, the old sailor remained ______, checking constantly whether the frightened cabin boy needed comfort or rest.",
  o:["considerate","irritable","insolent","negligent"],
  why:"He kept \"checking constantly whether the frightened cabin boy needed comfort or rest,\" which shows thoughtfulness toward others."}
],
"illuminate": [
 {t:"The tracer experiment helped ______ how nutrients travel through soil, clarifying a process that had puzzled agronomists for decades.",
  o:["illuminate","obscure","preclude","exaggerate"],
  why:"The experiment was \"clarifying a process that had puzzled agronomists for decades,\" so it made the process easier to understand."},
 {t:"During the coronation, hundreds of torches were arranged to ______ the cathedral's vast interior long after sunset.",
  o:["illuminate","conceal","confine","dissolve"],
  why:"\"Hundreds of torches\" were used inside the cathedral \"long after sunset,\" so their purpose was to light it up."}
],
"reassure": [
 {t:"City officials issued a statement to ______ residents that the water supply remained safe despite the nearby pipeline leak.",
  o:["reassure","alienate","frustrate","persecute"],
  why:"Officials told residents the water \"remained safe despite the nearby pipeline leak,\" aiming to remove their fears."},
 {t:"The veterinarian moved slowly to ______ the trembling animal, speaking softly until its rapid breathing finally began to calm.",
  o:["reassure","irritate","humiliate","aggravate"],
  why:"The vet \"moved slowly,\" \"speaking softly until its rapid breathing finally began to calm,\" to ease the animal's fear."}
],
"inquisitive": [
 {t:"Even as a child, the future explorer was so ______ that she interrogated sailors for hours about distant, uncharted coastlines.",
  o:["inquisitive","indifferent","meditative","submissive"],
  why:"She \"interrogated sailors for hours about distant, uncharted coastlines,\" which shows strong curiosity."},
 {t:"Octopuses are remarkably ______ creatures, often prying open containers and examining unfamiliar objects long after any reward has vanished.",
  o:["inquisitive","submissive","apprehensive","oblivious"],
  why:"Octopuses keep \"examining unfamiliar objects long after any reward has vanished,\" which shows curiosity for its own sake."}
],
"tyrannical": [
 {t:"By the third act, the once-beloved king has become ______, silencing advisors who dare to question his ruinous decisions.",
  o:["tyrannical","benevolent","submissive","apologetic"],
  why:"The king is now \"silencing advisors who dare to question\" him, a cruel and unjust use of power."},
 {t:"Protesters denounced the regime as ______, citing its habit of jailing journalists who published even mild criticism of officials.",
  o:["tyrannical","indulgent","frivolous","impartial"],
  why:"A regime with a \"habit of jailing journalists\" for \"even mild criticism\" uses its power cruelly and unjustly."}
],
"inanimate": [
 {t:"The robot's sensors allow it to distinguish ______ obstacles, like rocks and fences, from moving animals crossing its path.",
  o:["inanimate","instinctive","infectious","rebellious"],
  why:"\"Rocks and fences\" are set against \"moving animals,\" so these obstacles are the ones that are not alive."},
 {t:"Chemists explained that although crystals can grow and form patterns, they remain ______ matter without metabolism or reproduction.",
  o:["inanimate","vigorous","spontaneous","susceptible"],
  why:"Matter \"without metabolism or reproduction\" is not alive, even if it can grow and form patterns."}
],
"palpable": [
 {t:"After the layoffs were announced, a ______ anxiety spread through the office, coworkers exchanging worried glances instead of their usual chatter.",
  o:["palpable","trivial","pleasurable","figurative"],
  why:"Coworkers were \"exchanging worried glances instead of their usual chatter,\" so the anxiety was strong enough to be felt in the room."},
 {t:"The ancient scribe pressed his stylus into the clay, leaving ______ grooves that later archaeologists could trace with their fingertips.",
  o:["palpable","momentary","imaginable","fantastical"],
  why:"Archaeologists \"could trace\" the grooves \"with their fingertips,\" so the grooves can be physically felt."}
],
"dissolve": [
 {t:"To prepare the solution, the chemist warmed the beaker until the crystals began to ______, leaving the water perfectly clear.",
  o:["dissolve","accumulate","fracture","converge"],
  why:"The crystals disappeared into the warm liquid, \"leaving the water perfectly clear.\""},
 {t:"Facing mounting debts, the guild's elders voted to ______ the century-old trading company, ending its charter and dividing its remaining assets.",
  o:["dissolve","reinstate","diversify","buttress"],
  why:"The vote led to \"ending its charter and dividing its remaining assets,\" so the company was officially brought to an end."}
],
"uneventful": [
 {t:"Compared to the chaos of the revolution, the new government's first year in power was surprisingly ______, marked by routine meetings and minor reforms.",
  o:["uneventful","tumultuous","momentous","scandalous"],
  why:"The year is contrasted with \"the chaos of the revolution\" and was marked only by \"routine meetings and minor reforms.\""},
 {t:"The probe's journey through the asteroid belt proved ______, with sensors recording nothing more dramatic than drifting dust and silence.",
  o:["uneventful","perilous","turbulent","wondrous"],
  why:"The sensors recorded \"nothing more dramatic than drifting dust and silence,\" so nothing notable happened on the journey."}
],
"habitable": [
 {t:"Astronomers search for planets within a narrow orbital zone where liquid water might exist, making the surface potentially ______.",
  o:["habitable","stagnant","impenetrable","turbulent"],
  why:"A zone \"where liquid water might exist\" is what would make a planet's surface suitable for life."},
 {t:"In the final chapter, the shipwrecked crew finally finds a stretch of shore that looks ______, sheltered from wind and stocked with fresh water.",
  o:["habitable","treacherous","desolate","precarious"],
  why:"A shore \"sheltered from wind and stocked with fresh water\" is a place where the shipwrecked crew could live."}
],
"unscrupulous": [
 {t:"During the grain shortage, ______ merchants secretly mixed sawdust into flour sacks, cheating hungry villagers who had no way to inspect what they bought.",
  o:["unscrupulous","conscientious","benevolent","impartial"],
  why:"Merchants who \"secretly mixed sawdust into flour sacks, cheating hungry villagers\" are acting dishonestly for their own gain."},
 {t:"Economists warn that ______ employers misclassify workers as contractors, dodging the wages and benefits regular employees are legally owed.",
  o:["unscrupulous","philanthropic","considerate","courteous"],
  why:"Employers who misclassify workers while \"dodging the wages and benefits\" they legally owe are acting dishonestly."}
],
"circumstantial": [
 {t:"Lacking a direct sample, the geologists offered only ______ evidence—unusual mineral deposits—to support their theory that the crater formed from a meteor impact.",
  o:["circumstantial","conclusive","contradictory","subjective"],
  why:"\"Lacking a direct sample\" and \"offered only\" show the mineral deposits merely hint at the meteor theory without proving it."},
 {t:"The interview subject gave a ______ account of her childhood, listing exact dates, names, and rooms most participants would have forgotten.",
  o:["circumstantial","deficient","figurative","nonsensical"],
  why:"An account \"listing exact dates, names, and rooms\" that others would have forgotten is one full of specific details."}
],
"treacherous": [
 {t:"Meteorologists warned drivers that the icy highway had become ______ overnight, with visibility dropping and black ice spreading.",
  o:["treacherous","tolerable","uneventful","luminous"],
  why:"\"Visibility dropping and black ice spreading\" on an icy highway describe dangerous, unpredictable driving conditions."},
 {t:"The ______ advisor secretly informed enemy generals of the king's battle plans in exchange for a promised title.",
  o:["treacherous","virtuous","conscientious","impartial"],
  why:"An advisor who \"secretly informed enemy generals of the king's battle plans\" is betraying the king's trust."}
],
"annihilate": [
 {t:"The invading army ______ the ancient city, leveling its walls and temples until nothing remained but ash and rubble.",
  o:["annihilated","liberated","reconstructed","confined"],
  why:"\"Leveling its walls and temples until nothing remained but ash and rubble\" describes complete destruction of the city."},
 {t:"The debate team ______ its rivals, leaving the judges unanimous and the opposing side without a single rebuttal.",
  o:["annihilated","reassured","tolerated","reinstated"],
  why:"Judges who were \"unanimous\" and rivals left \"without a single rebuttal\" point to a total, one-sided defeat."}
],
"submissive": [
 {t:"Young wolves in a pack often display ______ behavior, lowering their bodies and avoiding eye contact with dominant members.",
  o:["submissive","ferocious","audacious","insolent"],
  why:"\"Lowering their bodies and avoiding eye contact with dominant members\" is how young wolves show they yield to others."},
 {t:"After the treaty, the once-defiant chieftains grew ______, paying tribute without complaint to avoid renewed conflict.",
  o:["submissive","rebellious","indignant","vindictive"],
  why:"The \"once-defiant\" chieftains changed, now \"paying tribute without complaint,\" which shows they stopped resisting."}
],
"sensible": [
 {t:"Facing dwindling supplies, the general made the ______ choice to retreat rather than risk his army in a doomed siege.",
  o:["sensible","impulsive","audacious","frivolous"],
  why:"Choosing to retreat \"rather than risk his army in a doomed siege\" when supplies are dwindling shows good practical judgment."},
 {t:"By the story's end, the young heir becomes ______ of his own arrogance, though the realization arrives too late.",
  o:["sensible","oblivious","incredulous","appreciative"],
  why:"The phrase \"the realization arrives too late\" shows the heir finally becomes aware of his own arrogance."}
],
"corroborate": [
 {t:"Follow-up interviews ______ the survey results, showing that reported stress levels matched participants' actual behavior.",
  o:["corroborated","contradicted","undermined","obscured"],
  why:"The interviews showed that reported stress \"matched participants' actual behavior,\" so they confirmed the survey results."},
 {t:"The diplomat's letters ______ earlier accounts of the famine, confirming that the crisis was worse than officials admitted.",
  o:["corroborate","contradict","exaggerate","preclude"],
  why:"The word \"confirming\" shows that the letters support what the earlier accounts of the famine had already said."}
],
"vindictive": [
 {t:"After his exile, the deposed minister grew ______, plotting for years to destroy the rivals who had betrayed him.",
  o:["vindictive","apologetic","complacent","submissive"],
  why:"\"Plotting for years to destroy the rivals who had betrayed him\" shows the minister was consumed by a desire for revenge."},
 {t:"Biologists cautioned against describing predators as ______, since their aggression follows instinct rather than any desire for revenge.",
  o:["vindictive","instinctive","ferocious","vigilant"],
  why:"The label is rejected because predators' aggression follows instinct \"rather than any desire for revenge.\""}
],
"reconstruct": [
 {t:"Using only fragmented letters and tax ledgers, the historian was able to ______ the daily routines of merchants who lived centuries before written diaries became common.",
  o:["reconstruct","dictate","conceal","revolutionize"],
  why:"Working from \"only fragmented letters and tax ledgers,\" the historian pieces together how merchants lived long ago."},
 {t:"After the earthquake leveled the ancient city, its citizens spent decades laboring to ______ the temples and marketplaces exactly as they had stood.",
  o:["reconstruct","obliterate","diversify","inspect"],
  why:"After the earthquake \"leveled\" the city, citizens labored to build the temples again \"exactly as they had stood.\""}
],
"preclude": [
 {t:"The absence of liquid water on the planet's surface appears to ______ the kind of life scientists find in Earth's oceans.",
  o:["preclude","facilitate","cultivate","exemplify"],
  why:"\"The absence of liquid water\" is something that would make ocean-like life impossible on the planet."},
 {t:"Outdated zoning laws in the city ______ construction of the affordable apartments planners say are desperately needed downtown.",
  o:["preclude","accelerate","validate","intensify"],
  why:"\"Outdated\" laws are standing in the way of apartments that are still \"desperately needed,\" so the laws prevent their construction."}
],
"advisable": [
 {t:"Given the harsh winter approaching, the general's advisers insisted it was ______ to delay the invasion until spring supply lines could be secured.",
  o:["advisable","inexcusable","frivolous","superfluous"],
  why:"With a \"harsh winter approaching\" and supply lines not yet secure, the advisers are recommending delay as the wise course."},
 {t:"Psychologists consider it ______ for new parents to seek support networks, since isolation often worsens postpartum stress.",
  o:["advisable","unsuitable","perilous","improbable"],
  why:"The reason given, that \"isolation often worsens postpartum stress,\" explains why seeking support is the recommended course."}
],
"deficient": [
 {t:"Soil ______ in nitrogen produces stunted crops, prompting farmers to rotate legumes that naturally replenish the missing nutrient.",
  o:["deficient","prevalent","competent","extravagant"],
  why:"The \"stunted crops\" and \"the missing nutrient\" show that the soil lacks the nitrogen it needs."},
 {t:"Though brilliant in argument, the professor in the play seemed ______ in ordinary kindness, wounding students without ever noticing.",
  o:["deficient","diligent","exemplary","resolute"],
  why:"\"Though brilliant in argument\" sets up a contrast, and \"wounding students without ever noticing\" shows he lacks kindness."}
],
"friction": [
 {t:"Growing ______ between city officials and residents over the proposed rezoning has delayed the vote for several months.",
  o:["friction","similarity","devotion","comprehension"],
  why:"A dispute \"between city officials and residents\" that \"has delayed the vote for several months\" is a growing conflict."},
 {t:"Early wheelwrights coated axles with animal fat to reduce the ______ that wore down wooden wheels on long trade routes.",
  o:["friction","absorption","projection","divergence"],
  why:"Coating axles with animal fat reduces the rubbing force that \"wore down wooden wheels.\""}
],
"luminous": [
 {t:"Deep-sea biologists observed ______ jellyfish drifting through the dark trench, their glowing bodies visible even from the submersible's camera.",
  o:["luminous","inanimate","stagnant","boisterous"],
  why:"The jellyfish have \"glowing bodies\" that stay visible in \"the dark trench,\" so they give off light."},
 {t:"Her ______ explanation of the survey results helped skeptical policymakers finally understand why the housing data mattered so much.",
  o:["luminous","incoherent","obscure","tedious"],
  why:"The explanation \"helped skeptical policymakers finally understand\" the data, so it must have been exceptionally clear."}
],
"differentiate": [
 {t:"Botanists use leaf shape and vein pattern to ______ closely related species that otherwise look nearly identical at first glance.",
  o:["differentiate","assimilate","generalize","obscure"],
  why:"Leaf shape and vein pattern let botanists tell apart species that \"otherwise look nearly identical.\""},
 {t:"The startup worked to ______ its mobile app from countless competitors by emphasizing a uniquely simple, uncluttered interface.",
  o:["differentiate","conceal","obtain","liberate"],
  why:"Emphasizing \"a uniquely simple, uncluttered interface\" is a way to make the app stand apart \"from countless competitors.\""}
],
"indignant": [
 {t:"The heroine grew ______ when her brother inherited the estate simply because tradition favored sons over daughters.",
  o:["indignant","complacent","appreciative","triumphant"],
  why:"Her brother inherited \"simply because tradition favored sons over daughters,\" an unfairness that would make her angry."},
 {t:"The ______ graduate student protested when a rival lab published her unpublished data without any acknowledgment or credit.",
  o:["indignant","apologetic","indifferent","expectant"],
  why:"The student \"protested\" because a rival lab used her data \"without any acknowledgment or credit,\" an unfair act that angered her."}
],
"benevolent": [
 {t:"Rather than punishing the defeated town, the general acted as a ______ conqueror, distributing grain and rebuilding its damaged wells.",
  o:["benevolent","vindictive","tyrannical","negligent"],
  why:"\"Rather than punishing the defeated town,\" the general was \"distributing grain and rebuilding its damaged wells,\" acts of kindness."},
 {t:"Field researchers described the aging elephant matriarch as ______, sharing scarce water with weaker herd members instead of driving them away.",
  o:["benevolent","irritable","submissive","insatiable"],
  why:"The matriarch was \"sharing scarce water with weaker herd members instead of driving them away,\" which shows generosity."}
],
"indispensable": [
 {t:"Chlorophyll is ______ to plants, since without it they cannot capture sunlight and convert it into usable energy.",
  o:["indispensable","irrelevant","superfluous","comparable"],
  why:"\"Without it they cannot capture sunlight\" shows that plants absolutely need chlorophyll."},
 {t:"The scribe became ______ to the court, as no other official could translate the foreign treaties the kingdom relied upon.",
  o:["indispensable","submissive","indifferent","objectionable"],
  why:"Because \"no other official could translate the foreign treaties,\" the court could not do without the scribe."}
],
"involuntary": [
 {t:"Shivering in cold weather is an ______ muscle response that helps the body generate heat without any deliberate effort.",
  o:["involuntary","atypical","erroneous","arbitrary"],
  why:"Shivering happens \"without any deliberate effort,\" so the body does it automatically, outside conscious control."},
 {t:"Many peasants were subjected to ______ labor on the lord's estate, forced to work fields they did not own.",
  o:["involuntary","lucrative","spontaneous","pleasurable"],
  why:"The peasants were \"forced to work fields they did not own,\" so the labor was done against their will."}
],
"figurative": [
 {t:"Textbooks sometimes use ______ language, describing DNA as a blueprint even though no literal drawings exist inside the cell.",
  o:["figurative","empirical","numerical","argumentative"],
  why:"Calling DNA \"a blueprint even though no literal drawings exist\" is a non-literal, metaphorical use of words."},
 {t:"The treaty's ______ phrase about burying the hatchet signaled peace, though no actual weapon was ever placed in the ground.",
  o:["figurative","contentious","erroneous","conditional"],
  why:"\"Burying the hatchet\" signaled peace \"though no actual weapon was ever placed in the ground,\" so the phrase is not literal."}
],
"preposterous": [
 {t:"Advisors dismissed the general's plan to invade in midwinter without supplies as ______, warning that the army would freeze before reaching the border.",
  o:["preposterous","plausible","methodical","trivial"],
  why:"Invading \"in midwinter without supplies\" was \"dismissed\" because \"the army would freeze,\" so the plan was seen as absurd."},
 {t:"In the farce, the servant's excuse for the missing jewels grows increasingly ______, layering absurd coincidences until the audience roars with laughter.",
  o:["preposterous","persuasive","coherent","poignant"],
  why:"The excuse keeps \"layering absurd coincidences until the audience roars with laughter,\" so it becomes more and more ridiculous."}
],
"reiterate": [
 {t:"Facing a skeptical parliament, the minister chose to ______ his warning about the famine, repeating the same figures he had cited weeks earlier.",
  o:["reiterate","contradict","conceal","exaggerate"],
  why:"\"Repeating the same figures he had cited weeks earlier\" shows the minister is stating his warning again."},
 {t:"City officials continue to ______ that the water remains safe to drink, repeating the assurance at every town hall meeting this month.",
  o:["reiterate","concede","speculate","theorize"],
  why:"\"Repeating the assurance at every town hall meeting\" shows officials keep saying the same thing again."}
],
"audacious": [
 {t:"The explorer's ______ plan to cross the frozen strait with minimal supplies stunned even his most experienced crew members.",
  o:["audacious","sensible","monotonous","conscientious"],
  why:"A plan \"to cross the frozen strait with minimal supplies\" that \"stunned\" experienced crew members is strikingly bold and risky."},
 {t:"The jester's ______ jokes about the king's vanity left the court gasping, unsure whether to laugh or call for guards.",
  o:["audacious","courteous","tedious","complimentary"],
  why:"Jokes \"about the king's vanity\" that leave the court \"gasping\" and thinking of calling guards are shockingly bold."}
],
"scandalous": [
 {t:"Rumors of the minister's ______ bribery scheme spread through the capital, forcing him to resign before the trial even began.",
  o:["scandalous","trivial","exemplary","philanthropic"],
  why:"A \"bribery scheme\" whose rumors forced the minister \"to resign before the trial even began\" caused public shock and outrage."},
 {t:"News that the lab had falsified its safety data struck the scientific community as ______, prompting an immediate investigation.",
  o:["scandalous","justifiable","uneventful","tolerable"],
  why:"Falsified safety data \"prompting an immediate investigation\" shows the community found the news shocking and outrageous."}
],
"prevalence": [
 {t:"Critics have long remarked on the ______ of storm imagery in the poet's work, since tempests appear in nearly every verse she wrote.",
  o:["prevalence","substitution","instability","antiquity"],
  why:"\"Tempests appear in nearly every verse she wrote\" shows how common storm imagery is in her work."},
 {t:"Linguists analyzing text messages noted the ______ of abbreviated spellings, since nearly every sample contained shortened words instead of full ones.",
  o:["prevalence","connotation","initiation","justification"],
  why:"\"Nearly every sample contained shortened words\" shows how widespread abbreviated spellings were."}
],
"concede": [
 {t:"Even skeptical researchers were forced to ______ that the experimental results consistently supported the controversial hypothesis after repeated trials.",
  o:["concede","speculate","theorize","dictate"],
  why:"\"Even skeptical researchers were forced to\" signals a reluctant admission that the results supported the hypothesis."},
 {t:"After months of siege, the defenders ______ the fortress rather than watch their remaining soldiers starve behind its walls.",
  o:["conceded","buttressed","liberated","reconstructed"],
  why:"\"After months of siege\" the defenders chose to give up the fortress \"rather than watch their remaining soldiers starve.\""}
],
"advantageous": [
 {t:"Scientists found that a longer beak was ______ for the finches, letting them reach seeds unavailable to birds with shorter beaks.",
  o:["advantageous","unsuitable","superfluous","precarious"],
  why:"A longer beak let the finches \"reach seeds unavailable to birds with shorter beaks,\" which is a clear benefit."},
 {t:"The heroine realizes that her outsider status, once a burden, becomes ______ when it allows her to move unnoticed through enemy territory.",
  o:["advantageous","conspicuous","intolerable","oppressive"],
  why:"Her status was \"once a burden\" but now \"allows her to move unnoticed,\" so it has turned into a benefit."}
],
"metaphysical": [
 {t:"Ancient philosophers debated ______ questions about the nature of the soul, arguing over whether it survived the body's death.",
  o:["metaphysical","grammatical","numerical","prudential"],
  why:"Questions about \"the nature of the soul\" and whether it \"survived the body's death\" concern reality and existence."},
 {t:"Some sociological theories remain so ______ that they resist testing, offering elegant abstractions rather than measurable, falsifiable claims.",
  o:["metaphysical","empirical","observable","practicable"],
  why:"Theories that \"resist testing\" and offer \"elegant abstractions rather than measurable, falsifiable claims\" are highly abstract."}
],
"illustrious": [
 {t:"The general's ______ career, marked by decisive victories and generous treatment of captives, earned him statues in three capital cities.",
  o:["illustrious","obscure","uneventful","scandalous"],
  why:"A career \"marked by decisive victories\" that \"earned him statues in three capital cities\" is famous and admired."},
 {t:"Local officials renamed the library after an ______ alumna whose scientific breakthroughs decades earlier had brought international recognition to the small town.",
  o:["illustrious","unimportant","unscrupulous","incredulous"],
  why:"Her \"scientific breakthroughs\" brought \"international recognition,\" and the library was renamed in her honor, so she is famous and admired."}
],
"uncontrollable": [
 {t:"Once the reaction accelerated past a certain temperature, the chemist realized it had become ______, forcing everyone to evacuate the laboratory immediately.",
  o:["uncontrollable","stagnant","tolerable","infrequent"],
  why:"The reaction \"accelerated past a certain temperature,\" \"forcing everyone to evacuate,\" so it could no longer be restrained."},
 {t:"The child's tantrum grew ______, and no amount of gentle reasoning from the exhausted parents seemed able to calm him down.",
  o:["uncontrollable","intelligible","momentary","harmonious"],
  why:"\"No amount of gentle reasoning\" could \"calm him down,\" so the tantrum could not be restrained."}
],
"ingenious": [
 {t:"Facing a naval blockade, the merchants devised an ______ system of hidden tunnels that let goods slip past enemy patrols undetected.",
  o:["ingenious","erroneous","unsuitable","observable"],
  why:"\"Hidden tunnels that let goods slip past enemy patrols undetected\" are a clever, inventive answer to the blockade."},
 {t:"The engineer's ______ design used the building's own weight to power its ventilation, eliminating the need for any electric fans.",
  o:["ingenious","extravagant","deficient","laborious"],
  why:"Using \"the building's own weight to power its ventilation\" and needing no fans is a clever, original idea."}
],
"unavoidable": [
 {t:"Historians argue that once both empires began arming their borders, war became nearly ______, regardless of any diplomat's last-minute efforts.",
  o:["unavoidable","inconceivable","improbable","unattainable"],
  why:"War would come \"regardless of any diplomat's last-minute efforts,\" so nothing could prevent it."},
 {t:"By the play's final scene, the hero's downfall feels ______, each earlier choice having narrowed his options to a single tragic path.",
  o:["unavoidable","arbitrary","spontaneous","preposterous"],
  why:"Each earlier choice \"narrowed his options to a single tragic path,\" so the downfall could not be escaped."}
],
"conspicuous": [
 {t:"Against the pale bark of the tree, the moth's dark wings were ______, a flaw that predators quickly exploited.",
  o:["conspicuous","obscure","luminous","impenetrable"],
  why:"Dark wings \"against the pale bark\" stand out, which is why predators \"quickly exploited\" the flaw."},
 {t:"The narrator's silence at dinner was ______, drawing worried glances from a family used to his constant chatter.",
  o:["conspicuous","boisterous","trivial","agreeable"],
  why:"His silence drew \"worried glances from a family used to his constant chatter,\" so it was very noticeable."}
],
"affectionate": [
 {t:"Despite his gruff exterior, the old sailor wrote ______ letters home, always addressing his daughter with tender nicknames.",
  o:["affectionate","indifferent","argumentative","insolent"],
  why:"\"Despite his gruff exterior\" signals a contrast, and \"tender nicknames\" for his daughter show warmth and fondness."},
 {t:"Researchers observed that dolphins nuzzle their calves in an ______ manner, reinforcing the bond between mother and offspring.",
  o:["affectionate","irritable","apprehensive","authoritative"],
  why:"Dolphins \"nuzzle their calves,\" a gentle act that reinforces \"the bond between mother and offspring.\""}
],
"languish": [
 {t:"Deprived of sunlight in the crowded greenhouse, the seedlings began to ______, their leaves yellowing despite regular watering.",
  o:["languish","thrive","converge","migrate"],
  why:"\"Deprived of sunlight,\" the seedlings weaken, as shown by \"their leaves yellowing despite regular watering.\""},
 {t:"The deposed king was left to ______ in a remote fortress for decades, forgotten by the court he once ruled.",
  o:["languish","intervene","retaliate","originate"],
  why:"The king was left \"in a remote fortress for decades, forgotten by the court,\" stuck in a miserable situation for a long time."}
],
"intervene": [
 {t:"Just as the duel was about to begin, the narrator ______, stepping between the two furious rivals with raised hands.",
  o:["intervened","retaliated","conformed","speculated"],
  why:"\"Stepping between the two furious rivals with raised hands\" just before the duel shows the narrator got involved to stop it."},
 {t:"Only a brief truce ______ between the two brutal wars, giving exhausted soldiers little time to rest before fighting resumed again.",
  o:["intervened","converged","dissolved","accelerated"],
  why:"The truce came \"between the two brutal wars,\" separating them in time before \"fighting resumed again.\""}
],
"withstand": [
 {t:"The fortress's thick granite walls were built to ______ prolonged sieges, allowing defenders to hold out for months against invading armies.",
  o:["withstand","facilitate","intensify","simulate"],
  why:"\"Thick granite walls\" that let defenders \"hold out for months against invading armies\" are built to resist sieges."},
 {t:"Though the storm battered the cottage all night, its timber frame managed to ______ the wind, sheltering the frightened family inside.",
  o:["withstand","aggravate","accelerate","conceal"],
  why:"\"Though the storm battered the cottage all night,\" the frame held and kept \"sheltering the frightened family inside.\""}
],
"subjective": [
 {t:"Online reviews are largely ______, reflecting individual taste rather than any standardized measure of a restaurant's quality.",
  o:["subjective","empirical","impartial","systematic"],
  why:"Reviews reflect \"individual taste rather than any standardized measure,\" so they are based on personal opinion."},
 {t:"Pain ratings in medical trials are inherently ______, since patients describe sensations that cannot be measured directly by instruments.",
  o:["subjective","conclusive","infallible","observable"],
  why:"Patients describe sensations \"that cannot be measured directly by instruments,\" so the ratings depend on personal feeling."}
],
"alienate": [
 {t:"Psychologists warn that constant criticism can ______ teenagers, pushing them toward isolation instead of open communication with parents.",
  o:["alienate","reassure","liberate","assimilate"],
  why:"Constant criticism ends up \"pushing them toward isolation instead of open communication with parents.\""},
 {t:"The king's refusal to consult his nobles started to ______ powerful allies, who eventually withdrew their military support.",
  o:["alienate","cultivate","compensate","elevate"],
  why:"The allies \"eventually withdrew their military support\" after the king refused to consult them, so he lost their backing."}
],
"connotation": [
 {t:"Historians note that the word barbarian carried a negative ______ for Roman writers, implying savagery rather than simply describing foreign peoples.",
  o:["connotation","projection","proposition","deviation"],
  why:"The word was \"implying savagery rather than simply describing foreign peoples,\" a suggested feeling beyond its literal meaning."},
 {t:"Tech companies now avoid the word hacker in marketing, aware of its criminal ______ despite the term's neutral origins.",
  o:["connotation","competence","occurrence","justification"],
  why:"The word suggests crime \"despite the term's neutral origins,\" an association beyond what it literally means."}
],
"impulsive": [
 {t:"Rather than consulting his council, the young king made an ______ decision to invade, acting on a sudden whim without weighing the consequences.",
  o:["impulsive","impartial","exemplary","apologetic"],
  why:"\"Rather than consulting his council\" and \"acting on a sudden whim without weighing the consequences\" describe acting without thinking."},
 {t:"In the lab, mice given the altered diet grew ______, snatching food pellets immediately rather than waiting the few seconds researchers had trained them to pause.",
  o:["impulsive","methodical","temperate","indifferent"],
  why:"The mice were \"snatching food pellets immediately rather than waiting,\" acting at once without restraint."}
],
"poignant": [
 {t:"The play's final scene, in which the old man waits alone at the empty station, is so ______ that audiences leave the theater in tears.",
  o:["poignant","tedious","whimsical","triumphant"],
  why:"An old man who \"waits alone at the empty station\" and audiences who \"leave the theater in tears\" signal a deeply moving scene."},
 {t:"The photograph of a single toy left in the flooded street became a ______ symbol of the storm's toll on the small coastal town.",
  o:["poignant","frivolous","ludicrous","pleasurable"],
  why:"\"A single toy left in the flooded street\" standing for \"the storm's toll\" is an image that stirs sadness."}
],
"prophetic": [
 {t:"The advisor's ______ warning that overexpansion would bankrupt the treasury went unheeded until the empire collapsed almost exactly as she had predicted.",
  o:["prophetic","erroneous","frivolous","superfluous"],
  why:"The empire \"collapsed almost exactly as she had predicted,\" so the warning correctly foretold what would happen."},
 {t:"The old sailor's dream in the novel proves ______, foretelling the shipwreck in such exact detail that the crew grows uneasy before departure.",
  o:["prophetic","nonsensical","irrelevant","improbable"],
  why:"The dream was \"foretelling the shipwreck in such exact detail,\" so it correctly predicted the future."}
],
"meditative": [
 {t:"Walking alone along the shore, the narrator slips into a ______ mood, letting each wave draw his thoughts further from the noise of the city.",
  o:["meditative","boisterous","vindictive","mischievous"],
  why:"\"Walking alone\" and letting each wave \"draw his thoughts\" away from the city's noise describe a quiet, thoughtful state."},
 {t:"The retired general's memoirs shift into a ______ tone, replacing battlefield accounts with slow, careful reflections on the cost of every decision he made.",
  o:["meditative","triumphant","frivolous","tumultuous"],
  why:"The memoirs turn from battle accounts to \"slow, careful reflections,\" which describes a quiet, deeply thoughtful tone."}
],
"indescribable": [
 {t:"The narrator confessed that the grief consuming her was ______, a sorrow so vast that every sentence she attempted collapsed before reaching its end.",
  o:["indescribable","momentary","tolerable","intelligible"],
  why:"\"Every sentence she attempted collapsed before reaching its end\" shows the grief was too vast to put into words."},
 {t:"Sociologists studying trauma found that many survivors called their experiences ______, since ordinary language failed to convey emotions of such intensity.",
  o:["indescribable","uneventful","recognizable","frivolous"],
  why:"\"Ordinary language failed to convey emotions of such intensity,\" so the experiences could not be put into words."}
],
"rebellious": [
 {t:"Colonial officials branded the tax protesters ______, since the group openly defied royal decrees and refused to submit to the governor's authority.",
  o:["rebellious","submissive","complacent","courteous"],
  why:"The protesters \"openly defied royal decrees and refused to submit to the governor's authority.\""},
 {t:"The study found that employees under strict supervision sometimes grow ______, quietly resisting management directives instead of following them obediently.",
  o:["rebellious","attentive","industrious","agreeable"],
  why:"The employees end up \"quietly resisting management directives instead of following them obediently.\""}
],
"practicable": [
 {t:"The general's advisors argued that a winter invasion was not ______, since frozen roads made moving troops and supplies nearly impossible.",
  o:["practicable","perilous","laborious","superfluous"],
  why:"\"Frozen roads made moving troops and supplies nearly impossible,\" so the invasion could not actually be carried out."},
 {t:"The team determined that recycling the rare metal was ______, since existing extraction methods could recover it without excessive cost or waste.",
  o:["practicable","unprofitable","unattainable","precarious"],
  why:"\"Existing extraction methods could recover it without excessive cost or waste,\" so the recycling could really be done."}
],
"justification": [
 {t:"The researcher provided a clear ______ for excluding the anomalous data point, explaining that faulty equipment had corrupted the original measurement.",
  o:["justification","approximation","substitution","generalization"],
  why:"The researcher was \"explaining that faulty equipment had corrupted the original measurement,\" giving a good reason for the exclusion."},
 {t:"The narrator searches for some ______ for her father's silence, hoping a hidden reason might explain his years of coldness.",
  o:["justification","resentment","distraction","correspondence"],
  why:"She hopes \"a hidden reason might explain his years of coldness,\" so she is looking for a reason behind the silence."}
],
"observable": [
 {t:"The dimming of the distant star was barely ______ without a powerful telescope, its faint flicker easy to miss.",
  o:["observable","justifiable","tolerable","practicable"],
  why:"A \"faint flicker easy to miss\" that requires \"a powerful telescope\" is something that can hardly be seen."},
 {t:"City planners pointed out that the effects of the bike-lane expansion were already ______ in reduced traffic congestion downtown.",
  o:["observable","unattainable","improbable","inaccessible"],
  why:"The effects could \"already\" be seen \"in reduced traffic congestion downtown,\" a change people can notice."}
],
"momentous": [
 {t:"The signing of the treaty proved ______, reshaping alliances across the continent for generations that followed.",
  o:["momentous","momentary","unimportant","superfluous"],
  why:"\"Reshaping alliances across the continent for generations that followed\" shows the signing had great, lasting importance."},
 {t:"Scientists called the detection of gravitational waves a ______ breakthrough, opening an entirely new way of observing the universe.",
  o:["momentous","trivial","tedious","precarious"],
  why:"A breakthrough \"opening an entirely new way of observing the universe\" is one of great importance for the future."}
],
"delirious": [
 {t:"The infected patient grew ______, unable to distinguish the hospital room from the childhood home he kept describing.",
  o:["delirious","coherent","vigilant","resolute"],
  why:"The \"infected patient\" was \"unable to distinguish the hospital room from the childhood home,\" a confused state caused by illness."},
 {t:"Upon hearing the ship had finally returned, the sailor's wife became ______ with joy, laughing and weeping at once.",
  o:["delirious","indignant","desolate","apologetic"],
  why:"\"With joy, laughing and weeping at once\" shows she was wildly overcome with happiness at the ship's return."}
],
"temperate": [
 {t:"The forest thrives in a ______ zone, spared from both the bitter frosts and scorching heat of nearby regions.",
  o:["temperate","desolate","turbulent","perilous"],
  why:"The zone is \"spared from both the bitter frosts and scorching heat,\" meaning its climate is mild, without extremes."},
 {t:"Unlike his hot-tempered brother, the younger prince in the tale remains ______, weighing every decision with quiet patience.",
  o:["temperate","impulsive","irritable","capricious"],
  why:"\"Unlike his hot-tempered brother,\" the prince weighs decisions \"with quiet patience,\" showing calm self-control."}
],
"malignant": [
 {t:"Pathologists confirmed the mass was ______, since biopsy samples revealed cells rapidly invading and spreading into surrounding healthy tissue.",
  o:["malignant","stagnant","temperate","superfluous"],
  why:"The biopsy showed cells \"rapidly invading and spreading into surrounding healthy tissue,\" which describes a dangerous growth that spreads."},
 {t:"The exiled minister nursed a ______ grudge against the king, plotting for years to see his former patron ruined and disgraced.",
  o:["malignant","momentary","benevolent","courteous"],
  why:"A grudge that has him \"plotting for years\" to see the king \"ruined and disgraced\" is one that wishes harm."}
],
"stagnant": [
 {t:"Biologists noted the coral population remained ______, showing neither growth nor decline despite years of careful, continuous monitoring.",
  o:["stagnant","turbulent","prodigious","capricious"],
  why:"The phrase \"showing neither growth nor decline\" describes a population that is not changing at all."},
 {t:"The poem describes a ______ pond behind the manor, its still surface choked with algae and untouched by any current.",
  o:["stagnant","turbulent","boisterous","vigorous"],
  why:"A pond with a \"still surface\" that is \"untouched by any current\" holds water that does not flow."}
],
"proverbial": [
 {t:"The city's ______ gridlock has become so well known that visitors joke about it before ever encountering the actual traffic.",
  o:["proverbial","obscure","infrequent","improbable"],
  why:"The gridlock is \"so well known\" that visitors joke about it before they ever see it."},
 {t:"Economists frequently quote the ______ saying that a rising tide lifts all boats when defending broad, market-wide growth policies.",
  o:["proverbial","numerical","incoherent","contradictory"],
  why:"\"A rising tide lifts all boats\" is a familiar saying that economists \"frequently quote,\" which makes it a proverb."}
],
"pronounce": [
 {t:"The young governess struggles to ______ her employer's foreign surname correctly, stumbling over its unfamiliar consonants during their first meeting.",
  o:["pronounce","conceal","validate","classify"],
  why:"She is \"stumbling over its unfamiliar consonants,\" so her struggle is with saying the surname aloud."},
 {t:"After lengthy deliberation, the tribunal ______ the deposed minister guilty of treason, sealing his fate before the assembled court.",
  o:["pronounced","reinstated","reassured","liberated"],
  why:"A tribunal that has finished \"lengthy deliberation\" formally declares the minister \"guilty of treason.\""}
],
"triumphant": [
 {t:"The research team felt ______ when their years-long search for the elusive particle finally yielded a clear signal in the detector data.",
  o:["triumphant","apologetic","indifferent","indignant"],
  why:"A \"years-long search\" that \"finally yielded a clear signal\" is a success that would make the team proud and joyful."},
 {t:"The delegates returned ______ from the peace conference, having secured a treaty that ended decades of border conflict between the two kingdoms.",
  o:["triumphant","desolate","submissive","apprehensive"],
  why:"The delegates came back \"having secured a treaty\" that ended decades of conflict, so they returned as proud winners."}
],
"originate": [
 {t:"Many volcanic islands ______ from magma that rises through cracks in the ocean floor, slowly building layers of hardened rock.",
  o:["originate","migrate","disengage","languish"],
  why:"The islands begin \"from magma that rises through cracks\" and slowly builds up, which names the source they come from."},
 {t:"The reformer ______ a new system of public schooling, drawing skepticism from nobles who doubted that commoners needed formal education.",
  o:["originated","concealed","obliterated","surpassed"],
  why:"The words \"a new system\" show that the reformer was the one who created and started it."}
],
"tenacious": [
 {t:"Despite repeated defeats, the ______ rebels refused to surrender their fortress, holding out through a winter siege that starved half their number.",
  o:["tenacious","submissive","complacent","apologetic"],
  why:"\"Despite repeated defeats,\" the rebels \"refused to surrender,\" which shows they would not give up."},
 {t:"The ______ journalist kept filing requests for the sealed documents, refusing to drop the story despite months of bureaucratic delay.",
  o:["tenacious","negligent","capricious","oblivious"],
  why:"The journalist \"kept filing requests\" and was \"refusing to drop the story\" despite months of delay."}
],
"designation": [
 {t:"Scientists gave the newly discovered comet a formal ______, a string of letters and numbers used to track its orbit precisely.",
  o:["designation","justification","objection","corollary"],
  why:"The comet received \"a string of letters and numbers used to track its orbit,\" which is an official name."},
 {t:"The council's ______ of a young general as commander surprised veterans who had expected someone with far more battlefield experience.",
  o:["designation","resentment","comprehension","absorption"],
  why:"The council chose a young general \"as commander,\" so the blank names the act of picking someone for a position."}
],
"intensify": [
 {t:"Meteorologists warned that the storm would ______ overnight, its winds strengthening from a mild breeze into a destructive gale by dawn.",
  o:["intensify","disperse","languish","disengage"],
  why:"The winds are described as \"strengthening from a mild breeze into a destructive gale,\" so the storm grows stronger."},
 {t:"Sociologists noted that economic strain tends to ______ family conflict, turning small disagreements over money into lasting bitterness.",
  o:["intensify","mitigate","conceal","simplify"],
  why:"Strain ends up \"turning small disagreements over money into lasting bitterness,\" which means the conflict becomes more extreme."}
],
"conceivable": [
 {t:"Physicists concede it is ______ that undiscovered particles exist, since current models cannot fully explain certain observed anomalies.",
  o:["conceivable","improbable","irrelevant","inexcusable"],
  why:"Since \"current models cannot fully explain\" the anomalies, physicists admit that unknown particles are a possibility one can believe."},
 {t:"Historians argue it is ______ that the empire might have survived longer had its rulers pursued diplomacy instead of endless conquest.",
  o:["conceivable","unavoidable","observable","inexplicable"],
  why:"The phrase \"might have survived longer had its rulers pursued diplomacy\" describes an outcome that can be imagined but did not happen."}
],
"unsuitable": [
 {t:"The wetland proved ______ for the transplanted species, whose roots rotted in soil far wetter than its native range.",
  o:["unsuitable","advantageous","hospitable","indispensable"],
  why:"The species' \"roots rotted in soil far wetter than its native range,\" so the wetland was not right for it."},
 {t:"Officials called the outdated software ______ for tracking modern traffic patterns, since it could not process real-time data.",
  o:["unsuitable","exemplary","practicable","instructive"],
  why:"The software is \"outdated\" and \"could not process real-time data,\" so it is not appropriate for the job."}
],
"impartial": [
 {t:"The old judge in the play prides himself on being ______, weighing evidence carefully instead of favoring his old friend.",
  o:["impartial","indulgent","impulsive","submissive"],
  why:"The judge weighs evidence \"instead of favoring his old friend,\" which means he does not take sides."},
 {t:"Both warring nations agreed to accept an ______ mediator, trusting that a neutral outsider could negotiate fairly for both sides.",
  o:["impartial","argumentative","unscrupulous","insolent"],
  why:"The nations want \"a neutral outsider\" who can \"negotiate fairly for both sides.\""}
],
"argumentative": [
 {t:"The graduate student proved so ______ in lab meetings, disputing each finding, that the professor began scheduling separate one-on-one discussions instead.",
  o:["argumentative","agreeable","apologetic","meditative"],
  why:"The student kept \"disputing each finding\" in meetings, which shows a habit of arguing."},
 {t:"City council meetings have grown increasingly ______, with residents interrupting one another over the proposed bike lane rather than reaching a compromise.",
  o:["argumentative","harmonious","uneventful","courteous"],
  why:"Residents are \"interrupting one another\" over the bike lane \"rather than reaching a compromise,\" so the meetings are full of disagreement."}
],
"explanatory": [
 {t:"Historians added an ______ footnote to the ancient decree, clarifying obscure terms so modern readers could understand the ruler's original intent.",
  o:["explanatory","apologetic","irrelevant","incoherent"],
  why:"The footnote was added for \"clarifying obscure terms so modern readers could understand,\" so its purpose is to explain."},
 {t:"The astronomer wrote an ______ summary of the eclipse, translating dense orbital mechanics into language any curious stargazer could grasp.",
  o:["explanatory","unintelligible","erroneous","argumentative"],
  why:"The summary works by \"translating dense orbital mechanics into language any curious stargazer could grasp,\" so it is meant to explain."}
],
"philanthropic": [
 {t:"Following the famine, several wealthy landowners made ______ donations of grain, quietly saving many villagers who could no longer feed their families.",
  o:["philanthropic","unscrupulous","vindictive","lucrative"],
  why:"Wealthy landowners gave grain away after a famine, \"quietly saving many villagers,\" which is generous giving to help others."},
 {t:"A ______ foundation funded the marine biologists' expedition, covering equipment costs that the university's shrinking research budget could no longer support.",
  o:["philanthropic","destitute","tyrannical","frivolous"],
  why:"The foundation \"funded\" the expedition and covered costs the university could not, so it gives money to good causes."}
],
"ferocious": [
 {t:"A ______ storm battered the coastline overnight, uprooting trees and tearing roofs loose with winds stronger than any recorded that season.",
  o:["ferocious","temperate","trivial","tolerable"],
  why:"The storm \"battered the coastline,\" \"uprooting trees\" with \"winds stronger than any recorded that season,\" so it was extremely violent."},
 {t:"The old sea captain's ______ temper terrified the crew, who avoided his cabin whenever his voice rose during a storm.",
  o:["ferocious","agreeable","submissive","harmonious"],
  why:"A temper that \"terrified the crew\" and made them avoid the captain's cabin must be extremely fierce."}
],
"frustrate": [
 {t:"Supply shortages ______ the city's plan to open the new clinic on schedule, delaying care for hundreds of residents.",
  o:["frustrated","facilitated","accelerated","validated"],
  why:"The shortages kept the clinic from opening \"on schedule,\" \"delaying care,\" so they stopped the plan from succeeding."},
 {t:"Participants who could not solve the puzzle within the time limit grew visibly ______, some abandoning the task altogether in irritation.",
  o:["frustrated","reassured","intrigued","liberated"],
  why:"People who \"could not solve the puzzle\" and quit \"in irritation\" are upset at being unable to succeed."}
],
"incredulous": [
 {t:"The old woman stared at her long-lost son, ______, certain that the war had claimed him decades before.",
  o:["incredulous","indifferent","complacent","vindictive"],
  why:"She had been \"certain that the war had claimed him decades before,\" so she cannot believe she is seeing her son."},
 {t:"The technician was ______ when the readings suggested the sample had cooled below what any known material allowed.",
  o:["incredulous","apologetic","negligent","affectionate"],
  why:"The readings showed cooling \"below what any known material allowed,\" a result the technician could hardly believe."}
],
"whimsical": [
 {t:"The city unveiled ______, sculpture-like bus stops shaped like giant teacups, hoping to brighten the gray downtown commute.",
  o:["whimsical","monotonous","desolate","inaccessible"],
  why:"Bus stops \"shaped like giant teacups\" and meant \"to brighten the gray downtown commute\" are playful and fanciful."},
 {t:"The ______ monarch changed his mind overnight, canceling the planned invasion simply because he disliked the color of the ships.",
  o:["whimsical","resolute","methodical","inflexible"],
  why:"The monarch \"changed his mind overnight\" and canceled an invasion \"simply because he disliked the color of the ships,\" acting on impulse."}
],
"erroneous": [
 {t:"Officials quickly retracted the ______ report claiming the reservoir's water was contaminated, after retesting showed it was actually safe.",
  o:["erroneous","conclusive","infallible","prophetic"],
  why:"The report was \"retracted\" after \"retesting showed it was actually safe,\" so its claim was a mistake."},
 {t:"An ______ assumption about likely voter turnout skewed the poll, leading analysts to predict entirely the wrong outcome.",
  o:["erroneous","irrelevant","empirical","unmistakable"],
  why:"The assumption \"skewed the poll\" and led analysts to predict \"entirely the wrong outcome,\" so it was incorrect."}
],
"consummate": [
 {t:"Historians often describe the diplomat as a ______ negotiator, since even hostile delegations left the treaty talks feeling respected and heard.",
  o:["consummate","contentious","negligent","tyrannical"],
  why:"\"Even hostile delegations left the treaty talks feeling respected and heard,\" which shows a negotiator of the highest skill."},
 {t:"After decades of quiet planning, the reformers finally ______ their campaign by ratifying a constitution that ended centuries of monarchic rule.",
  o:["consummated","undermined","concealed","contradicted"],
  why:"\"After decades of quiet planning,\" the reformers \"finally\" finished their campaign \"by ratifying a constitution,\" bringing it to completion."}
],
"obscure": [
 {t:"Before her writings resurfaced in archives, the medieval poet remained an ______ figure, mentioned only briefly in a single monastery's records.",
  o:["obscure","illustrious","influential","authoritative"],
  why:"The poet was \"mentioned only briefly in a single monastery's records,\" so almost no one knew of her."},
 {t:"Researchers caution that vague survey questions can ______ genuine attitudes, leading analysts to misread what respondents actually believe.",
  o:["obscure","illuminate","validate","articulate"],
  why:"\"Vague\" questions lead analysts \"to misread what respondents actually believe,\" so the real attitudes are hidden or made unclear."}
],
"allowable": [
 {t:"The lab's safety protocol lists the maximum ______ exposure to the chemical, beyond which researchers must wear additional protective equipment.",
  o:["allowable","involuntary","infrequent","instantaneous"],
  why:"A \"safety protocol\" sets a \"maximum\" level \"beyond which\" extra protection is required, so the blank means permitted by the rules."},
 {t:"Medieval guild rules specified the ______ number of apprentices a master craftsman could train, preventing any single workshop from dominating the trade.",
  o:["allowable","indefinite","prodigious","superfluous"],
  why:"\"Guild rules specified\" how many apprentices a master \"could train,\" so the number is the one the rules permit."}
],
"precarious": [
 {t:"Perched on a narrow ledge, the mountain goat maintained a ______ balance, one misstep from tumbling down the rocky slope.",
  o:["precarious","harmonious","complacent","tedious"],
  why:"The goat is on \"a narrow ledge\" and \"one misstep from tumbling down,\" so its balance is dangerously insecure."},
 {t:"The coalition government remains ______, holding power by only a handful of votes that could vanish with a single defection.",
  o:["precarious","indestructible","predominant","tyrannical"],
  why:"The government holds power by \"only a handful of votes that could vanish with a single defection,\" so it could easily fall."}
],
"imaginable": [
 {t:"City planners considered every solution ______ to the flooding, from raised streets to entirely new drainage systems beneath downtown.",
  o:["imaginable","comparable","irrelevant","susceptible"],
  why:"The range \"from raised streets to entirely new drainage systems\" shows planners looked at every solution anyone could think of."},
 {t:"The besieged garrison endured every hardship ______, from starvation to disease, before the fortress finally fell to the invading army.",
  o:["imaginable","trivial","pleasurable","momentary"],
  why:"The list \"from starvation to disease\" shows the garrison suffered every hardship one could think of."}
],
"proposition": [
 {t:"The scientist's ______, that continents drift slowly over millions of years, was dismissed by colleagues until new evidence emerged.",
  o:["proposition","designation","resentment","competence"],
  why:"The blank is restated as an idea, \"that continents drift slowly,\" which colleagues considered and \"dismissed.\""},
 {t:"The merchant offered the struggling colony a ______: he would supply weapons in exchange for exclusive rights to its harbor.",
  o:["proposition","justification","generalization","projection"],
  why:"The merchant \"offered\" a deal: weapons \"in exchange for exclusive rights to its harbor,\" which is a business offer."}
],
"correspondence": [
 {t:"Historians reconstructed the diplomat's years abroad largely through his ______, hundreds of letters exchanged with officials back home.",
  o:["correspondence","devotion","competence","designation"],
  why:"The blank is restated as \"hundreds of letters exchanged with officials back home.\""},
 {t:"Psychologists found a strong ______ between childhood stability and adult resilience, suggesting early environments shape long-term coping skills.",
  o:["correspondence","divergence","contradiction","friction"],
  why:"The finding suggests that \"early environments shape long-term coping skills,\" so the two things are closely connected."}
],
"extravagant": [
 {t:"Critics called the mayor's ______ renovation of city hall wasteful, given the crumbling schools nearby still awaiting repairs.",
  o:["extravagant","prudential","proportionate","temperate"],
  why:"Critics called the renovation \"wasteful\" while schools were still \"awaiting repairs,\" so it spent far more than was necessary."},
 {t:"The report called the politician's promises ______, arguing that no budget could realistically fund every project pledged.",
  o:["extravagant","attainable","trivial","sensible"],
  why:"The report argues that \"no budget could realistically fund every project pledged,\" so the promises go beyond reasonable limits."}
],
"aggravate": [
 {t:"Skipping doses of the antibiotic can ______ the infection, allowing resistant bacteria to multiply faster than the immune system can respond.",
  o:["aggravate","mitigate","confine","annihilate"],
  why:"Skipping doses lets \"resistant bacteria\" multiply \"faster than the immune system can respond,\" which makes the infection worse."},
 {t:"The old servant's endless chatter ______ the weary traveler, who longed only for silence and a warm bed.",
  o:["aggravated","reassured","intrigued","deceived"],
  why:"The traveler \"longed only for silence,\" so the servant's \"endless chatter\" annoyed him."}
],
"conceal": [
 {t:"Villagers ______ grain stores beneath false floors to keep invading soldiers from confiscating their winter provisions.",
  o:["concealed","inspected","dispensed","contaminated"],
  why:"The grain was put \"beneath false floors\" to \"keep invading soldiers from confiscating\" it, so it was hidden."},
 {t:"Survey respondents sometimes ______ embarrassing habits, which forces researchers to design indirect questions that reveal honest patterns.",
  o:["conceal","affirm","cultivate","illustrate"],
  why:"The habits are \"embarrassing,\" and researchers need \"indirect questions\" to bring out \"honest patterns,\" so respondents keep them secret."}
],
"sumptuous": [
 {t:"Visiting dignitaries marveled at the ______ banquet, where silver platters overflowed with rare spices and imported delicacies.",
  o:["sumptuous","deficient","monotonous","temperate"],
  why:"Dignitaries \"marveled\" at \"silver platters\" overflowing with \"rare spices and imported delicacies,\" a splendid and costly spread."},
 {t:"The pharaoh's tomb was filled with ______ furnishings, gilded thrones and jeweled ornaments meant to honor him in the afterlife.",
  o:["sumptuous","desolate","unimportant","tedious"],
  why:"The furnishings are \"gilded thrones and jeweled ornaments,\" which are splendid and expensive-looking."}
],
"exorbitant": [
 {t:"The toll charged at the bridge grew so ______ that travelers began taking longer, unguarded routes to avoid paying it.",
  o:["exorbitant","trivial","proportionate","lucrative"],
  why:"Travelers chose \"longer, unguarded routes to avoid paying it,\" so the toll had become unreasonably high."},
 {t:"The ______ cost of the rare isotope forced the laboratory to abandon its planned experiment on particle decay.",
  o:["exorbitant","tolerable","approximate","momentary"],
  why:"The cost \"forced the laboratory to abandon its planned experiment,\" so it was far higher than the lab could reasonably pay."}
],
"inflexible": [
 {t:"During the peace talks, the aging monarch remained ______, refusing every proposed compromise and insisting the original treaty terms stand unchanged forever.",
  o:["inflexible","indulgent","apologetic","indifferent"],
  why:"The monarch was \"refusing every proposed compromise\" and insisting the terms \"stand unchanged forever.\""},
 {t:"In the poem, the old oak's ______ trunk refused to sway with the storm, standing rigid while younger saplings bent low.",
  o:["inflexible","submissive","precarious","whimsical"],
  why:"The trunk \"refused to sway\" and stood \"rigid while younger saplings bent low,\" so it could not bend."}
],
"ludicrous": [
 {t:"Geologists initially dismissed the theory as ______, since the idea that entire continents drift slowly across the planet's surface sounded absurd.",
  o:["ludicrous","conclusive","empirical","tedious"],
  why:"Geologists \"dismissed\" the theory because the idea \"sounded absurd.\""},
 {t:"Critics online mocked the startup's ______ claim that its app could predict lottery numbers using ordinary weather data.",
  o:["ludicrous","sensible","justifiable","authoritative"],
  why:"Critics \"mocked\" the idea that an app could \"predict lottery numbers using ordinary weather data,\" a laughably unreasonable claim."}
],
"indefinite": [
 {t:"When funding collapsed, the university placed the study on ______ hold, unable to say whether researchers would ever resume the project.",
  o:["indefinite","momentary","instantaneous","infrequent"],
  why:"The university was \"unable to say whether researchers would ever resume the project,\" so the hold has no known end."},
 {t:"Survey designers avoided ______ wording, since vague phrases like sometimes or often let respondents interpret questions in very different ways.",
  o:["indefinite","emphatic","grammatical","numerical"],
  why:"The designers avoided \"vague phrases like sometimes or often,\" which readers can \"interpret\" in \"very different ways.\""}
],
"spacious": [
 {t:"The cave system proved unusually ______, its chambers wide enough for researchers to walk upright while mapping the underground network.",
  o:["spacious","impenetrable","luminous","perilous"],
  why:"The chambers were \"wide enough for researchers to walk upright,\" so the cave had plenty of room."},
 {t:"Roman senators met in a ______ hall large enough to seat hundreds of representatives comfortably beneath its towering marble columns.",
  o:["spacious","precarious","harmonious","temperate"],
  why:"The hall was \"large enough to seat hundreds of representatives comfortably.\""}
],
"capricious": [
 {t:"Mountain weather can be ______, shifting from clear sunshine to sudden hail within minutes, which forces climbers to pack gear for every possible condition.",
  o:["capricious","temperate","monotonous","uneventful"],
  why:"The weather keeps \"shifting from clear sunshine to sudden hail within minutes,\" so it changes suddenly and unpredictably."},
 {t:"Because the regent was ______, granting favors one week and revoking them the next, nobles never knew whether to trust his promises of protection.",
  o:["capricious","resolute","benevolent","methodical"],
  why:"He was \"granting favors one week and revoking them the next,\" so nobles \"never knew\" what to expect from him."}
],
"obliterate": [
 {t:"In the final act, the storm ______ the fishing village, sweeping away every cottage and boat until nothing remains but empty shoreline.",
  o:["obliterates","illuminates","confines","reconstructs"],
  why:"The storm ends up \"sweeping away every cottage and boat until nothing remains but empty shoreline.\""},
 {t:"Later scribes ______ the disgraced pharaoh's name from monument inscriptions, scratching away every trace so that history would seem to forget him entirely.",
  o:["obliterated","obtained","reconstructed","differentiated"],
  why:"The scribes were \"scratching away every trace\" of the name \"so that history would seem to forget him entirely.\""}
],
"industrious": [
 {t:"The ______ beaver worked continuously through the night, hauling branches and packing mud until it had completed an elaborate dam across the stream.",
  o:["industrious","complacent","mischievous","indifferent"],
  why:"The beaver \"worked continuously through the night\" until the dam was finished, which shows hard, steady work."},
 {t:"Though poor, the ______ seamstress in the story never rested, stitching garments deep into the night to support her younger siblings.",
  o:["industrious","destitute","frivolous","negligent"],
  why:"The seamstress \"never rested, stitching garments deep into the night,\" which shows how hardworking she was."}
],
"persuasive": [
 {t:"The lawyer in the novel is so ______ that jurors begin doubting evidence they had trusted completely just moments before his closing argument.",
  o:["persuasive","incoherent","impartial","tedious"],
  why:"Jurors \"begin doubting evidence they had trusted completely\" after he speaks, so he is very good at convincing people."},
 {t:"Community organizers crafted a ______ campaign that convinced hundreds of residents to reduce water usage during the ongoing drought.",
  o:["persuasive","frivolous","nonsensical","stagnant"],
  why:"The campaign \"convinced hundreds of residents to reduce water usage,\" so it was good at changing minds."}
],
"contemplate": [
 {t:"Late at night in the observatory, the astronomer liked to ______ the vast distances separating each faint point of light overhead.",
  o:["contemplate","exaggerate","mitigate","dictate"],
  why:"\"Late at night in the observatory,\" the astronomer quietly thinks about \"the vast distances\" between the stars."},
 {t:"By the final chapter, the weary detective started to ______ retiring from the force altogether, worn down by years of violence.",
  o:["contemplate","preclude","tolerate","simulate"],
  why:"\"Worn down by years of violence,\" the detective begins to consider the idea of \"retiring from the force altogether.\""}
],
"morality": [
 {t:"The novel's tormented narrator wrestles with ______ throughout, unsure whether his act of mercy was virtuous or simply self-serving.",
  o:["morality","competence","antiquity","comprehension"],
  why:"He is \"unsure whether his act of mercy was virtuous or simply self-serving,\" which is a question of right and wrong."},
 {t:"Developmental psychologists trace how a child's sense of ______ evolves, shifting from simple obedience to genuine concern for others' welfare.",
  o:["morality","abstraction","estimation","similarity"],
  why:"The shift \"from simple obedience to genuine concern for others' welfare\" describes a growing sense of right and wrong."}
],
"dispose": [
 {t:"Hospitals must ______ of biohazardous waste carefully, since improperly discarded materials can spread infection far beyond the building.",
  o:["dispose","conceive","intervene","compensate"],
  why:"The warning about \"improperly discarded materials\" shows that hospitals must get rid of the waste."},
 {t:"Years of famine and heavy taxation ______ the peasantry toward rebellion, making them receptive to any leader who promised change.",
  o:["disposed","reassured","confined","deceived"],
  why:"Famine and taxes pushed the peasants \"toward rebellion,\" \"making them receptive\" to it, so they became inclined to revolt."}
],
"persist": [
 {t:"Though every neighbor doubted her, the old woman ______ in searching the woods, refusing to believe her son was truly lost.",
  o:["persisted","intervened","languished","conceded"],
  why:"\"Though every neighbor doubted her,\" she kept searching, \"refusing to believe her son was truly lost.\""},
 {t:"Despite decades of policy change, wage gaps between certain groups ______, suggesting that deeper structural factors remain unaddressed.",
  o:["persist","dissolve","converge","disperse"],
  why:"\"Despite decades of policy change,\" the causes \"remain unaddressed,\" so the wage gaps continue to exist."}
],
"retaliate": [
 {t:"Economists note that when one nation imposes tariffs, trading partners frequently ______ with duties of their own, escalating the dispute further.",
  o:["retaliate","sympathize","conform","disengage"],
  why:"Partners answer tariffs \"with duties of their own, escalating the dispute,\" which is striking back in the same way."},
 {t:"Stung by his brother's mockery at the feast, the young prince resolved to ______ with a cruel jest of his own devising.",
  o:["retaliate","mediate","concede","persevere"],
  why:"\"Stung by his brother's mockery,\" the prince plans to answer with \"a cruel jest of his own.\""}
],
"wondrous": [
 {t:"Survey respondents called their first visit to the city ______, describing an overwhelming sense of awe at its scale and energy.",
  o:["wondrous","uneventful","tolerable","unsatisfactory"],
  why:"The visitors described \"an overwhelming sense of awe\" at the city, so the visit struck them as marvelous."},
 {t:"Astronomers called the newly imaged nebula ______, its swirling colors so vivid that even seasoned researchers paused to admire the photograph.",
  o:["wondrous","repulsive","trivial","monotonous"],
  why:"The colors were \"so vivid that even seasoned researchers paused to admire the photograph,\" so the nebula inspired wonder."}
],
"nonsensical": [
 {t:"The results seemed ______ at first, showing objects falling upward, until researchers realized their sensor had been installed backward.",
  o:["nonsensical","plausible","logical","trivial"],
  why:"Results \"showing objects falling upward\" make no sense, and they turned out to come from a sensor \"installed backward.\""},
 {t:"Commuters mocked the ______ new bus schedule, which routed buses miles out of their way for no apparent reason.",
  o:["nonsensical","methodical","ingenious","advantageous"],
  why:"Commuters \"mocked\" a schedule that sent buses \"miles out of their way for no apparent reason,\" so it made no sense."}
],
"justifiable": [
 {t:"Discarding the anomalous data point was ______, since a broken sensor had clearly produced a reading no other instrument confirmed.",
  o:["justifiable","inexcusable","arbitrary","objectionable"],
  why:"\"A broken sensor had clearly produced\" the odd reading, which gives a good reason for discarding it."},
 {t:"Sociologists argue that the community's distrust of the survey was ______, given the agency's history of misusing collected data.",
  o:["justifiable","inexplicable","superstitious","erroneous"],
  why:"The agency had a \"history of misusing collected data,\" which gives the community a good reason for its distrust."}
],
"disperse": [
 {t:"Wind currents cause pollen grains to ______ widely across the valley, allowing plants separated by great distances to still reproduce.",
  o:["disperse","converge","dissolve","languish"],
  why:"The pollen travels \"widely across the valley\" and reaches plants \"separated by great distances,\" so it spreads out."},
 {t:"When cavalry charged the square, officers ordered troops to ______ the crowd of protesters before the demonstration could grow any larger.",
  o:["disperse","reassure","cultivate","liberate"],
  why:"The troops must act \"before the demonstration could grow any larger,\" so they are told to break up the crowd."}
],
"complimentary": [
 {t:"The peer reviewer's notes were unusually ______, calling the experiment's design elegant and praising the team's careful control of every variable.",
  o:["complimentary","argumentative","apologetic","vindictive"],
  why:"The notes were \"calling the experiment's design elegant and praising the team,\" so they expressed admiration."},
 {t:"The innkeeper, hoping to win favor, offered the weary travelers a ______ meal, refusing any payment for the bread and stew.",
  o:["complimentary","lucrative","conditional","deficient"],
  why:"The innkeeper was \"refusing any payment for the bread and stew,\" so the meal was free."}
],
"negligent": [
 {t:"Historians later judged the governor ______, noting that he ignored repeated warnings about the failing levees until the river finally overflowed the town.",
  o:["negligent","vigilant","tyrannical","apprehensive"],
  why:"The governor \"ignored repeated warnings about the failing levees\" until the river flooded, so he failed to take proper care."},
 {t:"The ancient shipwright was called ______ after inspectors discovered rotted planks that he had simply painted over instead of replacing.",
  o:["negligent","conscientious","industrious","infallible"],
  why:"He left \"rotted planks that he had simply painted over instead of replacing,\" so he did not take proper care."}
],
"pernicious": [
 {t:"The invasive vine proved ______, quietly strangling native trees over many seasons until the once-diverse forest supported almost no other plant life.",
  o:["pernicious","advantageous","trivial","hospitable"],
  why:"The vine was \"quietly strangling native trees over many seasons,\" doing harm in a slow and hidden way."},
 {t:"Court flatterers had a ______ influence on the young ruler, gradually convincing him to distrust the very advisors who once kept peace.",
  o:["pernicious","benevolent","momentary","harmonious"],
  why:"The flatterers were \"gradually convincing him to distrust\" his good advisors, a slow and harmful effect."}
],
"insatiable": [
 {t:"In the novel, the miser's ______ greed drove him to hoard coins long after he had more than he could ever spend.",
  o:["insatiable","momentary","temperate","justifiable"],
  why:"He kept hoarding \"long after he had more than he could ever spend,\" so his greed could never be satisfied."},
 {t:"Even after seizing vast silver mines, the colonial administrators remained ______, demanding ever more tribute from villages already stripped bare.",
  o:["insatiable","complacent","destitute","benevolent"],
  why:"\"Even after seizing vast silver mines,\" they kept \"demanding ever more tribute,\" so nothing was enough for them."}
],
"diversify": [
 {t:"Facing crop failures, the ancient kingdom's farmers ______ their fields, planting several grains instead of relying on a single vulnerable harvest.",
  o:["diversified","simplified","confined","contaminated"],
  why:"The farmers began \"planting several grains instead of relying on a single\" harvest, so their fields became more varied."},
 {t:"Wary of losing everything to one collapsing trade route, the merchant guild began to ______, opening new markets across distant, unconnected regions.",
  o:["diversify","converge","languish","conform"],
  why:"Afraid of depending on \"one collapsing trade route,\" the guild started \"opening new markets\" in other regions to spread its risk."}
],
"insurmountable": [
 {t:"Blocked by sheer cliffs and driving snow, the invading army found the mountain pass nearly ______ and turned back before winter.",
  o:["insurmountable","tolerable","habitable","spacious"],
  why:"The pass was \"blocked by sheer cliffs and driving snow\" and the army \"turned back,\" so it could not be overcome."},
 {t:"With treasuries empty and debts mounting, the empire's financial troubles seemed ______, forcing officials to abandon several costly building projects.",
  o:["insurmountable","trivial","momentary","infrequent"],
  why:"\"Treasuries empty and debts mounting\" forced officials to give up projects, so the troubles seemed impossible to overcome."}
],
"methodical": [
 {t:"The biologist followed a ______ protocol, recording temperature and humidity at the same hour each day without exception.",
  o:["methodical","spontaneous","capricious","frivolous"],
  why:"Recording data \"at the same hour each day without exception\" describes an orderly, step-by-step procedure."},
 {t:"Rather than rushing into battle, the general was ______, mapping supply routes and weather patterns weeks before troops ever advanced.",
  o:["methodical","impulsive","complacent","boisterous"],
  why:"\"Rather than rushing into battle\" and mapping routes \"weeks before\" show a careful, organized planner."}
],
"liberate": [
 {t:"The proclamation sought to ______ enslaved people from bondage, granting them legal freedom that had long been denied by law.",
  o:["liberate","alienate","conceal","differentiate"],
  why:"\"From bondage\" and \"granting them legal freedom\" show the proclamation aimed to set people free."},
 {t:"By the novel's final chapter, the heroine manages to ______ herself from her guardian's suffocating rules and start a new life.",
  o:["liberate","confine","deceive","humiliate"],
  why:"Escaping \"her guardian's suffocating rules\" to \"start a new life\" means the heroine frees herself."}
],
"likewise": [
 {t:"Plants absorb sunlight to produce energy, and certain algae ______ convert light into food through a similar chemical process.",
  o:["likewise","erroneously","figuratively","indifferently"],
  why:"\"Through a similar chemical process\" signals that the algae do the same thing the plants do."},
 {t:"Economists found that wealthy households cut spending during the downturn, and middle-income families ______ reduced their purchases, following the same cautious pattern.",
  o:["likewise","extravagantly","impulsively","triumphantly"],
  why:"\"Following the same cautious pattern\" shows the middle-income families acted in the same way as wealthy ones."}
],
"exemplary": [
 {t:"The laboratory's ______ safety record made it the standard that other research facilities in the region tried to match.",
  o:["exemplary","deficient","precarious","erroneous"],
  why:"A record that became \"the standard that other research facilities... tried to match\" is a model for others."},
 {t:"The ruler ordered an ______ punishment for the captured rebel, hoping the harsh public spectacle would deter further uprisings.",
  o:["exemplary","indulgent","implicit","obscure"],
  why:"The \"harsh public spectacle\" was meant to \"deter further uprisings,\" so the punishment served as a warning to others."}
],
"flagrant": [
 {t:"The courtroom scene exposes the judge's ______ bias, a favoritism so obvious that even minor characters notice it.",
  o:["flagrant","implicit","obscure","infrequent"],
  why:"\"A favoritism so obvious that even minor characters notice it\" describes bias that is glaringly, shockingly open."},
 {t:"The narrator recoils at her brother's ______ lies, told so brazenly that even strangers can see through them.",
  o:["flagrant","plausible","persuasive","ingenious"],
  why:"Lies \"told so brazenly that even strangers can see through them\" are openly and shockingly obvious."}
],
"inexcusable": [
 {t:"Historians agreed that the general's decision to abandon wounded soldiers on the battlefield was ______, a choice no strategic pressure could ever justify.",
  o:["inexcusable","unavoidable","advisable","sensible"],
  why:"\"A choice no strategic pressure could ever justify\" means the decision cannot be excused."},
 {t:"Betraying his closest friend for a modest reward struck the other characters as ______, no matter how desperately poor the traitor claimed to be.",
  o:["inexcusable","justifiable","lucrative","involuntary"],
  why:"\"No matter how desperately poor the traitor claimed to be\" shows that no excuse could make the betrayal forgivable."}
],
"laborious": [
 {t:"Copying the entire manuscript by candlelight was ______, and the monk's hand ached long before he reached the final trembling page.",
  o:["laborious","instantaneous","pleasurable","spontaneous"],
  why:"Copying an \"entire manuscript\" until the monk's \"hand ached\" shows the work took great time and effort."},
 {t:"Translating the pharaoh's decree proved ______, since scholars had to compare each faded symbol against fragments scattered across three separate museums.",
  o:["laborious","trivial","uneventful","infallible"],
  why:"Scholars \"had to compare each faded symbol\" against fragments in \"three separate museums,\" a slow, effortful process."}
],
"expressive": [
 {t:"The queen's letters were remarkably ______, revealing fears and hopes that official court records had carefully hidden from public view.",
  o:["expressive","impartial","monotonous","indifferent"],
  why:"The letters were \"revealing fears and hopes\" that official records hid, so they clearly showed her feelings."},
 {t:"The old sailor's weathered hands were strangely ______, trembling and clenching in ways that told his grief more clearly than any words could.",
  o:["expressive","inanimate","resolute","vigilant"],
  why:"The hands \"told his grief more clearly than any words could,\" so they openly conveyed feeling."}
],
"intelligible": [
 {t:"After scholars cracked its script, the ancient tablet finally became ______, revealing tax records that had baffled archaeologists for nearly a century.",
  o:["intelligible","incomprehensible","irrelevant","indestructible"],
  why:"\"After scholars cracked its script,\" the tablet could at last be read and understood."},
 {t:"City officials rewrote the zoning proposal in plainer language after residents complained the original draft was scarcely ______ to anyone outside city hall.",
  o:["intelligible","objectionable","contentious","obscure"],
  why:"Officials rewrote the proposal \"in plainer language\" because residents could hardly understand the original draft."}
],
"unfathomable": [
 {t:"Astronomers admit that the true size of the observable universe is ______, defying any attempt to picture it using everyday distances.",
  o:["unfathomable","numerical","comparable","recognizable"],
  why:"\"Defying any attempt to picture it\" shows the universe's size is impossible to fully grasp."},
 {t:"In the play, the old king's madness appears ______ to his daughters, who cannot trace any clear cause behind his ravings.",
  o:["unfathomable","logical","infectious","trivial"],
  why:"The daughters \"cannot trace any clear cause\" for the madness, so it is impossible for them to understand."}
],
"miraculous": [
 {t:"Survivors of the shipwreck called their rescue ______, since no one expected any sailors to be found alive after so many days adrift.",
  o:["miraculous","uneventful","unavoidable","methodical"],
  why:"\"No one expected any sailors to be found alive,\" so the rescue seemed like a miracle."},
 {t:"The patient's ______ response to the experimental drug astonished doctors, who had expected the illness to prove fatal within weeks.",
  o:["miraculous","malignant","deficient","monotonous"],
  why:"The response \"astonished doctors\" who \"expected the illness to prove fatal,\" so it seemed like a miracle."}
],
"unattainable": [
 {t:"Physicists note that absolute zero remains ______ in practice, since no experiment has ever managed to remove every trace of thermal energy.",
  o:["unattainable","practicable","unavoidable","comparable"],
  why:"\"No experiment has ever managed\" to reach absolute zero, so it stays impossible to achieve."},
 {t:"In the novel, the distant lighthouse comes to symbolize an ______ goal, always visible yet perpetually out of the children's reach.",
  o:["unattainable","obscure","unimportant","instinctive"],
  why:"\"Always visible yet perpetually out of the children's reach\" describes a goal that can never be reached."}
],
"unprofitable": [
 {t:"The experimental fuel proved ______ to produce at scale, since manufacturing it consumed more energy than the fuel itself could later generate.",
  o:["unprofitable","advantageous","sensible","instantaneous"],
  why:"Making the fuel \"consumed more energy than the fuel itself could later generate,\" so producing it yields no gain."},
 {t:"The old bookshop remained stubbornly ______, its narrow margins barely covering rent despite the owner's devoted, loyal customers.",
  o:["unprofitable","lucrative","extravagant","prominent"],
  why:"\"Narrow margins barely covering rent\" show the shop was not making money."}
],
"irrelevant": [
 {t:"When testing the new alloy's strength, engineers found the color of the sample was ______, since only its density and composition mattered.",
  o:["irrelevant","indispensable","conclusive","conspicuous"],
  why:"\"Only its density and composition mattered,\" so the sample's color had no bearing on the test."},
 {t:"The tribunal ruled that the defendant's earlier career was ______ to the specific charges of embezzlement, so jurors were told to disregard it entirely.",
  o:["irrelevant","comparable","susceptible","proportionate"],
  why:"Jurors \"were told to disregard it entirely,\" so the earlier career had no connection to the charges."}
],
"distinguishable": [
 {t:"Coins minted under the emperor's reign are still ______ from later forgeries because of a faint mark stamped near the rim.",
  o:["distinguishable","inseparable","inaccessible","resultant"],
  why:"\"A faint mark stamped near the rim\" lets people tell the real coins apart from forgeries."},
 {t:"The twins in the novel are scarcely ______ to strangers, though their mother notices the subtle difference in how they laugh.",
  o:["distinguishable","comparable","hospitable","indifferent"],
  why:"\"Though their mother notices the subtle difference\" contrasts with strangers, who can hardly tell the twins apart."}
],
"attainable": [
 {t:"Psychologists find that people persist longer at tasks when a goal feels ______ rather than impossibly distant.",
  o:["attainable","arbitrary","strenuous","perilous"],
  why:"\"Rather than impossibly distant\" sets up a contrast with a goal that feels within reach."},
 {t:"Conservationists set an ______ target for the species' recovery, aiming for a modest population increase rather than a full rebound.",
  o:["attainable","extravagant","involuntary","erroneous"],
  why:"Aiming for \"a modest population increase rather than a full rebound\" describes a target that can realistically be reached."}
],
"pleasurable": [
 {t:"Researchers found that certain scents trigger a ______ response in the brain, releasing chemicals associated with comfort and calm.",
  o:["pleasurable","repulsive","turbulent","vigilant"],
  why:"\"Releasing chemicals associated with comfort and calm\" describes a response that feels enjoyable."},
 {t:"The poet describes idle afternoons by the river as deeply ______, far richer than any ambition he once chased.",
  o:["pleasurable","tedious","lucrative","strenuous"],
  why:"The poet finds idle afternoons \"far richer than any ambition he once chased,\" so they give him deep enjoyment."}
],
"periodical": [
 {t:"The laboratory subscribed to a respected ______ so researchers could review newly published studies on coral bleaching before submitting their own findings.",
  o:["periodical","proponent","corollary","designation"],
  why:"The lab \"subscribed\" to it to read \"newly published studies,\" so it is a regularly published journal."},
 {t:"Ancient Egyptian priests tracked the Nile's ______ flooding, timing planting seasons around the river's predictable, recurring surges each year.",
  o:["periodical","spontaneous","incessant","capricious"],
  why:"\"Predictable, recurring surges each year\" describe flooding that happens at regular intervals."}
],
"persecute": [
 {t:"Roman authorities ______ early Christians for refusing to worship the emperor, imprisoning or executing those who would not renounce their faith.",
  o:["persecuted","tolerated","reassured","compensated"],
  why:"\"Imprisoning or executing those who would not renounce their faith\" describes cruel treatment because of beliefs."},
 {t:"The novel's narrator recalls being ______ at boarding school, mocked and isolated simply for speaking with an unfamiliar accent.",
  o:["persecuted","validated","reinstated","liberated"],
  why:"Being \"mocked and isolated simply for speaking with an unfamiliar accent\" is cruel, unfair treatment for who one is."}
],
"indifferent": [
 {t:"The protagonist grows ______ to his fading fortune, shrugging at each lost estate as though wealth no longer mattered to him.",
  o:["indifferent","attentive","susceptible","indispensable"],
  why:"\"Shrugging at each lost estate as though wealth no longer mattered\" shows he no longer cares."},
 {t:"The study rated the town's public transit system as ______, functional enough for commuters but far from a model other cities might envy.",
  o:["indifferent","exemplary","sumptuous","inaccessible"],
  why:"\"Functional enough\" but \"far from a model other cities might envy\" describes something merely mediocre."}
],
"indestructible": [
 {t:"Researchers once assumed diamond was ______, but experiments show that under extreme heat it can burn away entirely, leaving only carbon dioxide.",
  o:["indestructible","inflexible","luminous","inanimate"],
  why:"\"But... it can burn away entirely\" contradicts an earlier belief that diamond could not be destroyed."},
 {t:"In the fable, the hero believes his shield is ______ until a single cleverly aimed arrow finally shatters it completely.",
  o:["indestructible","superfluous","precarious","symbolic"],
  why:"\"Until a single... arrow finally shatters it\" overturns the hero's belief that the shield could never be broken."}
],
"projection": [
 {t:"Economists issued a ______ of unemployment, estimating how job losses might rise if the factory closures continued at their present pace.",
  o:["projection","justification","contradiction","substitution"],
  why:"\"Estimating how job losses might rise if\" closures continued describes a forecast based on current trends."},
 {t:"The play opened with a ______ of a stormy sea flickering across the backdrop, setting a tense mood before the actors spoke.",
  o:["projection","connotation","deviation","generalization"],
  why:"An image of a stormy sea \"flickering across the backdrop\" is a picture cast onto a surface."}
],
"differentiation": [
 {t:"Ancient legal codes established a clear ______ between free citizens and enslaved people, assigning each group separate rights and obligations.",
  o:["differentiation","similarity","correspondence","dependence"],
  why:"\"Assigning each group separate rights and obligations\" shows the codes marked a difference between the two groups."},
 {t:"Biologists study cell ______, the process by which identical stem cells develop distinct structures and functions as an embryo grows.",
  o:["differentiation","absorption","accumulation","substitution"],
  why:"\"Identical stem cells develop distinct structures and functions\" describes cells becoming different from one another."}
],
"assimilate": [
 {t:"Students in the lecture tried to ______ the dense material on thermodynamics, rereading notes until the underlying formulas finally made sense.",
  o:["assimilate","circulate","exaggerate","dispense"],
  why:"\"Rereading notes until the underlying formulas finally made sense\" describes taking in and understanding the material."},
 {t:"Many immigrants who arrived at the turn of the century worked hard to ______ into their new country, adopting its language and customs.",
  o:["assimilate","disperse","intervene","persevere"],
  why:"\"Adopting its language and customs\" shows the immigrants were becoming part of the new society."}
],
"fracture": [
 {t:"Engineers inspected the bridge's steel beam for any ______, a hairline crack that could weaken the structure under heavy loads.",
  o:["fracture","friction","buttress","accumulation"],
  why:"\"A hairline crack that could weaken the structure\" restates what the engineers were looking for: a break."},
 {t:"Disputes over succession caused the empire to ______, as regional governors broke away to form their own rival kingdoms.",
  o:["fracture","converge","thrive","conform"],
  why:"\"Regional governors broke away to form their own rival kingdoms\" shows the empire split apart."}
],
"vigilant": [
 {t:"After the border raids, the medieval garrison remained ______ through the night, posting extra sentries to watch for approaching enemy torches.",
  o:["vigilant","complacent","boisterous","submissive"],
  why:"\"Posting extra sentries to watch for approaching enemy torches\" shows the garrison stayed watchful and alert."},
 {t:"Lab technicians remain ______ when handling volatile chemicals, checking gauges constantly to catch any sign of overheating before it becomes dangerous.",
  o:["vigilant","negligent","impulsive","incredulous"],
  why:"\"Checking gauges constantly to catch any sign of overheating\" describes people who stay alert for danger."}
],
"boisterous": [
 {t:"The victory feast grew ______ as soldiers sang, shouted toasts, and pounded the tables long into the night.",
  o:["boisterous","meditative","monotonous","desolate"],
  why:"Soldiers \"sang, shouted toasts, and pounded the tables,\" so the feast became noisy and lively."},
 {t:"The tavern scene in the novel is ______, full of laughter, clinking mugs, and arguments over spilled ale.",
  o:["boisterous","stagnant","uneventful","temperate"],
  why:"\"Full of laughter, clinking mugs, and arguments\" describes a loud, energetic scene."}
],
"predominant": [
 {t:"Nitrogen is the ______ gas in Earth's atmosphere, far outweighing oxygen and other trace gases in overall volume.",
  o:["predominant","infrequent","atypical","unimportant"],
  why:"\"Far outweighing oxygen and other trace gases\" shows nitrogen is the most abundant gas."},
 {t:"Among the surveyed teenagers, anxiety about academic performance was the ______ concern, overshadowing worries about friendships or family.",
  o:["predominant","trivial","momentary","improbable"],
  why:"\"Overshadowing worries about friendships or family\" shows this concern was the most common and important one."}
],
"appreciative": [
 {t:"The volunteers received an ______ message from the shelter's director, thanking them for donating hours during the coldest week.",
  o:["appreciative","apologetic","indignant","incredulous"],
  why:"The message was \"thanking them for donating hours,\" so it expressed gratitude."},
 {t:"The narrator grows ______ of the play's subtle irony only after rereading the final scene several times.",
  o:["appreciative","oblivious","apprehensive","suggestive"],
  why:"\"Only after rereading the final scene several times\" does the narrator come to understand and enjoy the \"subtle irony.\""}
],
"fantastical": [
 {t:"The narrator wanders through a ______ city where staircases twist upward into clouds, a setting far removed from anything grounded in reality.",
  o:["fantastical","logical","temperate","proverbial"],
  why:"\"Staircases twist upward into clouds\" in a setting \"far removed from anything grounded in reality\" describes something strange and imaginary."},
 {t:"Online rumors about the blackout offered ______ explanations, from secret experiments to alien interference, none supported by any evidence.",
  o:["fantastical","empirical","conclusive","authoritative"],
  why:"Explanations ranging \"from secret experiments to alien interference, none supported by any evidence\" are wildly imaginative and unrealistic."}
],
"insidious": [
 {t:"The empire's decline was ______, weakening trade routes and loyalty so gradually that few contemporaries noticed the danger until collapse seemed sudden.",
  o:["insidious","conspicuous","instantaneous","tumultuous"],
  why:"The decline happened \"so gradually that few contemporaries noticed the danger,\" which is harm that creeps in unseen."},
 {t:"Air pollution's effects are often ______, harming residents' lungs gradually over years before any obvious illness appears.",
  o:["insidious","momentary","unmistakable","spontaneous"],
  why:"\"Harming residents' lungs gradually over years before any obvious illness appears\" describes slow, hidden damage."}
],
"facilitate": [
 {t:"The enzyme ______ the chemical reaction, lowering the energy required so molecules combine far more quickly than they would alone.",
  o:["facilitates","precludes","undermines","simulates"],
  why:"\"Lowering the energy required so molecules combine far more quickly\" shows the enzyme makes the reaction easier."},
 {t:"New canal systems ______ trade between distant regions, letting merchants move goods far faster than the old overland routes allowed.",
  o:["facilitated","frustrated","confined","obscured"],
  why:"\"Letting merchants move goods far faster\" shows the canals made trade easier."}
],
"oppressive": [
 {t:"The tyrant's ______ rule fills the kingdom with fear, silencing poets and jailing anyone who dares to question his authority.",
  o:["oppressive","benevolent","impartial","frivolous"],
  why:"A rule that \"fills the kingdom with fear, silencing poets and jailing\" critics is harsh and controlling."},
 {t:"Soldiers marched through ______ summer heat, the humid air pressing down on them so heavily that many collapsed before reaching camp.",
  o:["oppressive","temperate","tolerable","momentary"],
  why:"\"The humid air pressing down on them so heavily that many collapsed\" describes heat that is heavy and hard to bear."}
],
"preparatory": [
 {t:"Engineers ran a series of ______ tests on the rocket's engines to catch flaws before the actual launch date arrived.",
  o:["preparatory","consequent","frivolous","figurative"],
  why:"The tests were run \"to catch flaws before the actual launch date arrived,\" so they were done to get ready."},
 {t:"The opening chapter is largely ______, quietly arranging the characters' motives before the storm of the main plot begins.",
  o:["preparatory","conclusive","tumultuous","argumentative"],
  why:"\"Quietly arranging the characters' motives before... the main plot begins\" shows the chapter sets things up for what follows."}
],
"populous": [
 {t:"The ancient capital grew so ______ that officials struggled to supply enough grain to feed every household within its walls.",
  o:["populous","desolate","illustrious","harmonious"],
  why:"Officials \"struggled to supply enough grain to feed every household,\" so the capital held a very large number of people."},
 {t:"Biologists found the colony remarkably ______, its tunnels packed with thousands more ants than any nearby nest they had surveyed.",
  o:["populous","industrious","stagnant","inaccessible"],
  why:"\"Tunnels packed with thousands more ants than any nearby nest\" shows the colony had a very large population."}
],
"enviable": [
 {t:"Merchants in the port city built an ______ trade network, one that rival towns spent decades trying and failing to copy.",
  o:["enviable","unprofitable","arbitrary","involuntary"],
  why:"\"Rival towns spent decades trying and failing to copy\" it, so the network was something others wished they had."},
 {t:"Even her rivals admitted the heroine possessed an ______ wit, turning every insult into a joke that left them speechless.",
  o:["enviable","incoherent","indifferent","infrequent"],
  why:"\"Even her rivals admitted\" it and were left \"speechless,\" so her wit was something others wished they had."}
],
"conform": [
 {t:"Teenagers often ______ to their friend group's style, adopting similar slang and clothing to avoid feeling like outsiders.",
  o:["conform","dictate","retaliate","intervene"],
  why:"\"Adopting similar slang and clothing to avoid feeling like outsiders\" describes behaving the way the group does."},
 {t:"The economist noted that spending patterns in the survey ______ closely to what the model had predicted months earlier.",
  o:["conform","persist","originate","reciprocate"],
  why:"The patterns agree \"closely\" with \"what the model had predicted,\" so the data match the prediction."}
],
"conditional": [
 {t:"In the novel, the heiress's inheritance is ______, granted only if she marries before her guardian's stern deadline arrives.",
  o:["conditional","definite","involuntary","instantaneous"],
  why:"\"Granted only if she marries before\" the deadline shows the inheritance depends on a requirement being met."},
 {t:"The city council approved ______ funding for the park, releasing money only after contractors meet strict emissions standards.",
  o:["conditional","indiscriminate","exorbitant","spontaneous"],
  why:"\"Releasing money only after contractors meet strict emissions standards\" shows the funding depends on a requirement."}
],
"infrequent": [
 {t:"Letters from her absent brother were ______, arriving so rarely that she treasured each envelope for months afterward.",
  o:["infrequent","incessant","innumerable","tedious"],
  why:"\"Arriving so rarely that she treasured each envelope\" shows the letters did not come often."},
 {t:"Severe droughts were once ______ in the region, but climate shifts have made dry seasons increasingly common.",
  o:["infrequent","prevalent","unavoidable","conspicuous"],
  why:"\"But... increasingly common\" contrasts with the past, when such droughts rarely happened."}
],
"apologetic": [
 {t:"The defeated general sent an ______ letter to the senate, admitting his errors and begging forgiveness for the lost battle.",
  o:["apologetic","indignant","insolent","authoritative"],
  why:"\"Admitting his errors and begging forgiveness\" shows the letter expressed regret."},
 {t:"The lab technician grew ______ after realizing his error had delayed the entire team's measurements by several days.",
  o:["apologetic","complacent","triumphant","vindictive"],
  why:"\"Realizing his error had delayed the entire team\" explains why the technician began showing regret."}
],
"liable": [
 {t:"Metal bridges exposed to salty coastal air are ______ to corrode faster than those built farther inland.",
  o:["liable","competent","resolute","expectant"],
  why:"Bridges \"exposed to salty coastal air\" are being described as likely to rust \"faster than those built farther inland.\""},
 {t:"Under the new policy, landlords are ______ for injuries caused by unsafe conditions they knowingly ignored.",
  o:["liable","apologetic","unsuitable","indispensable"],
  why:"\"Under the new policy\" landlords must answer for \"injuries caused by unsafe conditions they knowingly ignored,\" meaning legal responsibility."}
],
"instability": [
 {t:"Chemists noted that the compound's ______ caused it to decompose within minutes, releasing gas whenever exposed to even mild heat or light.",
  o:["instability","essence","similarity","absorption"],
  why:"A compound that will \"decompose within minutes\" under \"even mild heat or light\" lacks steadiness."},
 {t:"Analysts warn that political ______, fueled by contested elections and weak institutions, could scare away foreign investment for years to come.",
  o:["instability","morality","rationality","correspondence"],
  why:"\"Contested elections and weak institutions\" that \"scare away foreign investment\" describe an unsteady, unreliable political situation."}
],
"insolent": [
 {t:"The young courtier's ______ remarks to the queen, delivered with a smirk rather than the expected bow, cost him his position at court.",
  o:["insolent","courteous","complimentary","submissive"],
  why:"Remarks \"delivered with a smirk rather than the expected bow\" that \"cost him his position\" were rude and disrespectful."},
 {t:"Though warned to hold her tongue, the heroine offered an ______ reply to the tyrant, refusing to lower her eyes or soften her words.",
  o:["insolent","agreeable","incoherent","indulgent"],
  why:"\"Though warned to hold her tongue,\" she kept \"refusing to lower her eyes or soften her words,\" a boldly disrespectful answer."}
],
"authoritative": [
 {t:"The journal's editors deemed the study ______ because its methods had been replicated by independent laboratories across several countries.",
  o:["authoritative","erroneous","subjective","circumstantial"],
  why:"Methods \"replicated by independent laboratories across several countries\" make the study reliable and trustworthy."},
 {t:"The general issued orders in such an ______ tone that even skeptical officers obeyed without daring to question his judgment.",
  o:["authoritative","apprehensive","inquisitive","affectionate"],
  why:"\"Even skeptical officers obeyed without daring to question his judgment,\" so his tone was commanding and confident."}
],
"instructive": [
 {t:"The old fisherman's stories, though simple, were ______, quietly teaching the boy lessons about patience that no lecture could match.",
  o:["instructive","frivolous","monotonous","fantastical"],
  why:"\"Quietly teaching the boy lessons about patience\" shows the stories provided useful lessons."},
 {t:"The failed experiment was ______, revealing an overlooked variable that ultimately reshaped how researchers approached the entire investigation.",
  o:["instructive","irrelevant","trivial","uneventful"],
  why:"\"Revealing an overlooked variable that ultimately reshaped\" the research shows the failure taught something useful."}
],
"oblivious": [
 {t:"The garrison commander, ______ to the enemy's approach through the fog, left the gates unguarded until the attack began.",
  o:["oblivious","attentive","susceptible","comparable"],
  why:"He \"left the gates unguarded until the attack began,\" so he was unaware of the enemy coming."},
 {t:"Absorbed entirely in her letter, the heroine sat ______ to the fierce storm gathering just outside the cottage window.",
  o:["oblivious","submissive","agreeable","inaccessible"],
  why:"\"Absorbed entirely in her letter\" explains why she did not notice the storm outside."}
],
"prudential": [
 {t:"The old merchant's ______ habits, quietly saving coins against hard winters, contrasted sharply with his son's reckless spending.",
  o:["prudential","extravagant","impulsive","philanthropic"],
  why:"\"Quietly saving coins against hard winters\" contrasts with \"reckless spending,\" showing careful planning for future risks."},
 {t:"The city council passed ______ zoning rules, limiting new construction near the floodplain to reduce future storm damage.",
  o:["prudential","negligent","indiscriminate","whimsical"],
  why:"Limiting building near the floodplain \"to reduce future storm damage\" shows careful judgment about future risks."}
],
"symbolic": [
 {t:"Sociologists often note that wedding rings function as ______ markers of commitment, recognized in some form across many cultures.",
  o:["symbolic","numerical","obscure","involuntary"],
  why:"Rings act as \"markers of commitment,\" meaning they stand for something beyond themselves."},
 {t:"The surrender ceremony was largely ______, since the defeated army had already scattered and posed no further threat.",
  o:["symbolic","consequential","perilous","contentious"],
  why:"The army \"had already scattered and posed no further threat,\" so the ceremony mattered only as a gesture, not in practice."}
],
"reinstate": [
 {t:"After years of exile, the deposed minister was finally ______ to his former post by the new king.",
  o:["reinstated","confined","alienated","conceded"],
  why:"\"After years of exile\" he returned \"to his former post,\" so he was restored to the position he once held."},
 {t:"After months of scrutiny, officials finally agreed to ______ the suspended employee once the investigation cleared him of any misconduct.",
  o:["reinstate","persecute","humiliate","inspect"],
  why:"A \"suspended employee\" whom \"the investigation cleared\" would be restored to his former job."}
]
};
