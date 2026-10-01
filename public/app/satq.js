// Digital SAT style "Words in Context" questions. Original passages written for A's SAT Words.
// Format: word -> [{t: passage with ______, o: [answer, distractor, distractor, distractor], why: explanation}]
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
]
};
