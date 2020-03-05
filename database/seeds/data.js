exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Items")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Items").insert([
        {
          By: "aaron695",
          Text:
            "Indeed, it is not off topic when the topic is &quot;Mapping Coronavirus, Responsibly.&quot;<p>One practical implication of grouping Taiwan with China is that Italy banned travel from Taiwan along with China, even though the situation in Taiwan is basically fine.<p>Italso not plausible that the author, a professional cartographer, just made a mistake about Taiwan."
        },
        {
          By: "aaron695",
          Text:
            "It depends.<p>If you take arguments to some sub-system (an example are database keys like the id of an entity instance), then you need to sanitize input.<p>Anyway, today I learnt something. If you have free-form data like text it makes sense not to sanitize it because in this case sanitizing depends on the output domain. For example &lt; is dangerous for HTML and &#x27; is dangerous for SQL, and so on."
        },
        {
          By: "aaron695",
          Text:
            "Ursula von der Leyen knows about the dangers of leaving incriminating information on cell phones."
        },
        {
          By: "aaron695",
          Text:
            "Yes, but a the same time that is the reason, why we have no Elon Musk in switzerland."
        },
        {
          By: "aaron695",
          Text:
            "In Switzerland they currently have a good picture of whats going on. They were able to trace backe where all infected people got the disease from."
        },
        {
          By: "aaron695",
          Text:
            "&gt; air bat cap drum each fine gust harp sit jury crunch look made near odd pit quench red sun trap urge vest whale plex yank zip<p>How did you settle on jury? Notably it seems to be the only word that is more than one syllable."
        },
        {
          By: "aaron695",
          Text:
            "To a teenager with only a passing experience with electronics, operating a soldering iron is much easier than learning to flash an EEPROM :-)<p>And I only had one working, locked laptop and a broken one. The whole endeavour was mostly to inherit my fatherlaptop than to recover any data. What I did with my fatherdata is probably a story for another time."
        },
        {
          By: "aaron695",
          Text:
            "I do not consider vagaries of the stock market a valid reason to potentially wipe out an entire species.<p>More than that, you correctly identify it as a scare, which should be a clear indication how a short-sighted policy that may be."
        },
        {
          By: "aaron695",
          Text:
            "Just to add to your point. In old time mafia controlled villages in the old country, anecdotally you did not have to lock your car, but few would argue that an average person in that village was &#x27;safe&#x27;.<p>It almost reminds me of some my parents&#x27; peers yearning for the good ole days of communism, cuz riffraffs would not dare to talk back to a cop.<p>edit: It is hard to argue with that kind of sentiment. It is technically right."
        },
        {
          By: "aaron695",
          Text:
            "I agree, I find it awkward when a programming language (like Java and JS) provide operators for their built in types, but if you want to use different types (say, complex numbers, numbers with different precision, ...) you have to use much less readable functions instead.<p>About the argument that operator overloading can be abused for unreadable code: so can functions, naming, or anything else."
        },
        {
          By: "aaron695",
          Text:
            "Hard to say. 4 weeks at least I think.  4 weeks to start to snuff it. But it will be longer for many people. Ita good question, thatin part what the OP is trying to work out.<p>Look at the (ongoing) deaths on the Diamond Princess"
        },
        {
          By: "aaron695",
          Text:
            "They find themselves in the same position of being a minority with a powerful, majority market share competitor that has the ability to put their products front and center (e.g.: on google.com and other Google properties).<p>I think the IE6 era was bad for the web for a lot of reasons, but fortunately the investigations into Microsoft made it harder for them to abuse their overwhelming marketshare."
        },
        {
          By: "aaron695",
          Text:
            "The government does not take care of anything. Almost all health insurance for working age adults is private - provided either by their employer or bought on a government run exchange. Among those private insurances, usually the insurance pays around nd the worker pays half. So you are stuck with a $1700 if you get tested.<p>Also minimum wage in the Us ranges from $7 to about $15 in very expensive areas. So depending on you let salary you are left with 2 choices<p>1. Get tested if you have a severe flu or cold like symptoms and not eat and pay rent for a few weeks.<p>2. Tough it out , wait a few dayks and hope it goes away."
        },
        {
          By: "aaron695",
          Text:
            "This is a problem of the model of polymorphism a language has. It&#x27;s orthogonal to the functiorator distinction. It doesn&#x27;t arise based on having this distinction or not.<p>In Haskell you use typeclasses (you can think of them as Go interfaces or Rust traits) and without them you cannot introduce nameclashes. In Scheme (the Lisp that I know)... you don&#x27;t have anything. You import things from libraries, define variable bindings and depending on the order of all this your variable is going to be bound to something, most likely a procedure... but which one? Depends on the order. Not great. I prefer the Haskell approach to this, but then Haskell is a bit complicated in other areas. But again, this has little to do with &quot;operators vs functions&quot;."
        },
        {
          By: "aaron695",
          Text:
            "This is a problem of the model of polymorphism a language has. It&#x27;s orthogonal to the functiorator distinction. It doesn&#x27;t arise based on having this distinction or not.<p>In Haskell you use typeclasses (you can think of them as Go interfaces or Rust traits) and without them you cannot introduce nameclashes. In Scheme (the Lisp that I know)... you don&#x27;t have anything. You import things from libraries, define variable bindings and depending on the order of all this your variable is going to be bound to something, most likely a procedure... but which one? Depends on the order. Not great. I prefer the Haskell approach to this, but then Haskell is a bit complicated in other areas. But again, this has little to do with &quot;operators vs functions&quot;."
        }
      ]);
    });
};
