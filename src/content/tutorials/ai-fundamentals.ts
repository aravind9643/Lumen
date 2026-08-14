import type { Tutorial } from '../types'

export const aiFundamentals: Tutorial = {
  slug: 'ai-fundamentals',
  title: 'AI Fundamentals: A Complete Beginner’s Course',
  shortTitle: 'AI Fundamentals',
  description:
    'Start with zero background and finish understanding how artificial intelligence actually works. Every term explained, every idea built from the ground up, nothing assumed.',
  category: 'Artificial Intelligence',
  difficulty: 'beginner',
  icon: 'brain',
  tags: ['AI', 'Machine Learning', 'Concepts', 'Foundations'],
  color: '#4f46e5',
  updated: '2026-08-14',
  prerequisites: [
    'Nothing. Genuinely nothing — no coding, no maths beyond arithmetic.',
    'If you can read this sentence, you have everything you need to start.',
  ],
  outcomes: [
    'Explain what AI, machine learning, and deep learning are, and how they differ',
    'Describe how a computer "learns" from examples, step by step',
    'Understand what data, features, labels, and models actually mean',
    'Follow how a neural network turns numbers into predictions',
    'Recognise the ways AI projects commonly fail, and why',
    'Read an AI news article and tell substance from hype',
  ],
  chapters: [
    {
      title: 'Chapter 1 — What Is This Thing?',
      lessons: [
        {
          slug: 'what-is-ai',
          title: 'What Artificial Intelligence Actually Is',
          description:
            'Start here. We define AI without jargon, and clear up the three words everyone mixes up.',
          duration: 10,
          blocks: [
            {
              type: 'callout',
              kind: 'info',
              title: 'Before we begin',
              text: 'This course assumes you know nothing about AI, programming, or mathematics. Every technical word gets defined the first time it appears. If you ever hit a term that feels unexplained, that is a bug in the writing, not a gap in you.',
            },
            {
              type: 'paragraph',
              text: 'Let us start with the simplest possible definition, and then make it precise.',
            },
            {
              type: 'definition',
              term: 'Artificial Intelligence (AI)',
              plain:
                'Getting a computer to do something that we would call "smart" if a person did it. Recognising a face, understanding a sentence, playing chess, spotting a tumour in a scan.',
              formal:
                'The field of computer science concerned with building systems that perform tasks normally requiring human intelligence. Note that the definition is about the *task*, not about how the machine solves it.',
            },
            {
              type: 'paragraph',
              text: 'That last sentence is the important one, so let us sit with it. AI is defined by **what** is achieved, not **how**. This surprises people. A chess program that wins by checking millions of possible moves very fast is doing AI. So is a person who wins on instinct and experience. Same task, completely different machinery inside, both called intelligent.',
            },
            {
              type: 'analogy',
              title: 'Flight is the same story',
              text: 'A bird flies by flapping. An aeroplane flies with fixed wings and jet engines. Nothing about a 747 imitates a sparrow. Yet we comfortably say both fly, because flying describes the outcome, not the mechanism. AI works exactly the same way — machines achieve intelligent results through means that need not resemble how you or I think.',
            },
            { type: 'heading', level: 2, text: 'The three words everyone confuses' },
            {
              type: 'paragraph',
              text: 'You will constantly see "AI", "machine learning", and "deep learning" used as though they mean the same thing. They do not. They are three circles, each one sitting completely inside the one before it. Getting this straight now will make everything later much easier.',
            },
            {
              type: 'steps',
              items: [
                {
                  title: 'Artificial Intelligence — the biggest circle',
                  text: 'Everything in the field. This includes approaches with no learning at all. A thermostat that switches on the heating below 18°C is following a rule a human wrote. It is simple, but it belongs in this circle.',
                },
                {
                  title: 'Machine Learning — a circle inside AI',
                  text: 'The part of AI where the computer works out the rules itself by studying examples, instead of a human writing those rules by hand. This is where nearly all modern progress lives.',
                },
                {
                  title: 'Deep Learning — a circle inside machine learning',
                  text: 'A particular machine learning technique using "neural networks" with many layers. This is what powers ChatGPT, image generators, and voice assistants. We will build up to exactly what this means in Chapter 3.',
                },
              ],
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'A quick way to keep them straight',
              text: 'All deep learning is machine learning. All machine learning is AI. But not all AI is machine learning — and that is the distinction people miss most often.',
            },
            { type: 'heading', level: 2, text: 'The single most important idea in this course' },
            {
              type: 'paragraph',
              text: 'Here is the shift that makes machine learning different from ordinary computer programming. It is worth understanding deeply, because everything else follows from it.',
            },
            {
              type: 'paragraph',
              text: 'In **normal programming**, a human writes the rules. You give the computer rules and data, and it gives you answers.',
            },
            {
              type: 'paragraph',
              text: 'In **machine learning**, this is turned around. You give the computer data and answers, and it gives you the rules.',
            },
            {
              type: 'comparison',
              title: 'Two ways to build a spam filter',
              left: {
                label: 'Normal programming',
                items: [
                  'A person reads lots of spam emails',
                  'That person writes rules by hand',
                  'Rule: if it says "FREE MONEY", it is spam',
                  'You can read the rules and see exactly why',
                  'Spammer writes "FR3E M0NEY" and it slips through',
                  'Every new trick needs a human to add a new rule',
                ],
              },
              right: {
                label: 'Machine learning',
                items: [
                  'A person collects 100,000 emails, each marked spam or not',
                  'The computer studies them and finds the patterns itself',
                  'The "rules" end up as numbers, hard to read directly',
                  'Harder to explain why any single decision was made',
                  'Catches new tricks it was never explicitly told about',
                  'Improves by being shown fresh examples, not new code',
                ],
              },
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'Machine learning is not always the right answer',
              text: 'If the rule is already known and stable, just write it down as ordinary code. Calculating sales tax is a fixed formula — using machine learning for it would be slower, less accurate, and impossible to audit. Machine learning earns its cost only when the rule is unknown, too complicated to write out, or keeps changing.',
            },
            { type: 'heading', level: 2, text: 'Why the definition of AI keeps moving' },
            {
              type: 'paragraph',
              text: 'Something odd happens in this field. Once a problem is solved, people stop calling it AI. Recognising printed text was a landmark AI achievement in the 1970s. Today your phone does it in a photo and nobody is impressed. Chess was considered the summit of machine intelligence until a computer won in 1997, at which point it was reclassified as "just search".',
            },
            {
              type: 'definition',
              term: 'The AI effect',
              plain:
                'The habit of removing things from the AI category as soon as they start working reliably. It means "AI" always refers to whatever is still difficult right now.',
            },
            {
              type: 'paragraph',
              text: 'This is worth knowing because it explains why AI can feel like it is permanently on the horizon. It is not that progress is not happening. It is that the goalposts move by definition every time something succeeds.',
            },
            {
              type: 'exercise',
              prompt:
                'Look around the room you are in, or think about your phone. Try to name three things you use that involve AI. Then, for each one, ask yourself: did that feel like "AI" to you before you thought about it?',
              hint: 'Consider: predictive text on your keyboard, the way your photos app groups faces, spam filtering in your email, route suggestions in a maps app, or what appears in a social media feed.',
              solution:
                'Common answers: autocomplete and autocorrect (a model predicting your next word), face grouping in photos (image recognition), spam filtering (text classification), maps predicting traffic (prediction from patterns), recommendations on any streaming or shopping service (learning from behaviour). Most people do not think of these as AI — which is the AI effect in action. All of them were unsolved research problems within living memory.',
            },
            {
              type: 'keyPoints',
              title: 'What to take away from this lesson',
              points: [
                'AI is defined by the task being done, not by how the machine does it.',
                'AI contains machine learning, which contains deep learning — three nested circles, not synonyms.',
                'Normal programming: rules in, answers out. Machine learning: answers in, rules out.',
                'Machine learning is worth it only when the rule is unknown, too complex, or changing.',
                'The "AI effect" means solved problems stop being called AI, so AI always sounds unfinished.',
              ],
            },
            {
              type: 'quiz',
              question:
                'A company writes 400 if-then rules by hand to sort customer support emails into categories. Is this AI?',
              options: [
                'Yes — it is a rule-based system, which is a classical branch of AI',
                'Only if it runs on powerful hardware',
                'No, because nothing is learning',
                'Only if it is more than 90% accurate',
              ],
              answer: 0,
              explanation:
                'Remember: AI is defined by the task, not the method. Sorting emails intelligently is an AI task, so a rule-based system doing it is AI. What it is *not* is machine learning, because no rules were learned from data — a human wrote every one of them.',
            },
            {
              type: 'callout',
              kind: 'success',
              title: 'Next up',
              text: 'You now know what AI is and how machine learning differs from ordinary programming. In the next lesson we look at the raw material every machine learning system needs: data. What it actually is, and why its quality decides everything.',
            },
          ],
        },
        {
          slug: 'understanding-data',
          title: 'Data: The Raw Material of Learning',
          description:
            'Rows, columns, features, and labels — the vocabulary of data, explained with a worked example you can follow.',
          duration: 11,
          blocks: [
            {
              type: 'recap',
              points: [
                'AI is defined by the task, not the method.',
                'Machine learning finds rules from examples instead of being handed rules.',
                'This means machine learning cannot start without examples to study.',
              ],
            },
            {
              type: 'paragraph',
              text: 'If machine learning learns from examples, then the examples are the whole foundation. Get them wrong and nothing built on top can be right. So let us be precise about what "data" means in practice.',
            },
            { type: 'heading', level: 2, text: 'Data is a table' },
            {
              type: 'paragraph',
              text: 'Most machine learning data can be pictured as a spreadsheet. Each **row** is one example — one house, one email, one patient. Each **column** is one thing you know about that example.',
            },
            {
              type: 'paragraph',
              text: 'Here is a small dataset for predicting house prices. Five rows, meaning five houses we have records for.',
            },
            {
              type: 'table',
              headers: ['Size (sq ft)', 'Bedrooms', 'Age (years)', 'Distance to centre (km)', 'Price (£)'],
              rows: [
                ['1,400', '3', '15', '8.2', '245,000'],
                ['1,850', '4', '3', '12.0', '310,000'],
                ['900', '2', '42', '2.1', '198,000'],
                ['2,300', '4', '8', '15.5', '389,000'],
                ['1,100', '2', '25', '4.7', '215,000'],
              ],
            },
            {
              type: 'paragraph',
              text: 'Now the two words you will meet constantly. They simply split those columns into two groups.',
            },
            {
              type: 'definition',
              term: 'Feature',
              plain:
                'A piece of information you use to make a prediction — an input. In the table above, size, bedrooms, age, and distance are all features.',
              formal:
                'An individual measurable property of the thing being observed. Often written as X in textbooks and code.',
            },
            {
              type: 'definition',
              term: 'Label',
              plain:
                'The thing you are trying to predict — the answer. In the table above, price is the label.',
              formal:
                'The target variable, the value a model is trained to output. Often written as y in textbooks and code.',
            },
            {
              type: 'analogy',
              title: 'Features and labels are just questions and answers',
              text: 'Imagine flashcards for studying. The front of the card lists the clues: 1,400 square feet, 3 bedrooms, 15 years old, 8.2 km out. The back of the card has the answer: £245,000. The front is your features, the back is your label. Machine learning is the process of studying thousands of these flashcards until you can guess the back from the front.',
            },
            { type: 'heading', level: 2, text: 'The two kinds of prediction' },
            {
              type: 'paragraph',
              text: 'What the label looks like determines what kind of problem you have. There are two main types, and almost everything you meet is one of them.',
            },
            {
              type: 'comparison',
              title: 'Regression vs classification',
              left: {
                label: 'Regression — predicting a number',
                items: [
                  'The label is a quantity on a scale',
                  'What will this house sell for?',
                  'How many units will we sell next month?',
                  'What temperature will it be tomorrow?',
                  'Answers can be anything: 245,000 or 245,001',
                  '"Close" counts — being £500 off is nearly right',
                ],
              },
              right: {
                label: 'Classification — predicting a category',
                items: [
                  'The label is one of a fixed set of options',
                  'Is this email spam or not spam?',
                  'Which of these 10 animals is in the photo?',
                  'Will this customer cancel: yes or no?',
                  'Answers come from a list, nothing in between',
                  'You are either right or wrong, no partial credit',
                ],
              },
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'How to tell them apart instantly',
              text: 'Ask yourself: would it make sense to be "a little bit wrong"? Predicting £246,000 when the true price is £245,000 is nearly right — that is regression. Predicting "cat" when the answer is "dog" is not nearly right, it is just wrong — that is classification.',
            },
            {
              type: 'exercise',
              prompt:
                'For each of these, decide whether it is regression or classification: (a) predicting how many minutes a delivery will take, (b) deciding whether a transaction is fraudulent, (c) predicting a film’s star rating out of 5, (d) identifying which language a sentence is written in.',
              hint: 'Apply the test: could the answer be "slightly off" in a meaningful way, or does it have to be exactly one of a fixed set of options?',
              solution:
                '(a) Regression — minutes are a quantity, and 31 vs 30 is nearly right. (b) Classification — fraudulent or not, two categories. (c) This one is genuinely debatable, which is why it is here. If the rating must be a whole star, it is classification with 5 categories. If half-stars or decimals are allowed, treating it as regression usually works better because it captures that 4.5 is close to 5. In practice, people do it both ways. (d) Classification — a sentence is in one language from a fixed list.',
            },
            { type: 'heading', level: 2, text: 'Why data quality decides everything' },
            {
              type: 'paragraph',
              text: 'A model can only learn what its data shows it. If the data is wrong, incomplete, or unrepresentative, the model faithfully learns the wrong thing. This is not a flaw that better algorithms can fix.',
            },
            {
              type: 'callout',
              kind: 'danger',
              title: 'A real and famous failure',
              text: 'A hiring model was trained on ten years of a company’s past hiring decisions. Those past decisions had favoured men. The model learned that pattern precisely and started penalising CVs that mentioned women’s activities. The algorithm was working perfectly — it had faithfully learned the pattern in the data it was given. The data encoded a historical bias, so the model reproduced it at scale.',
            },
            {
              type: 'paragraph',
              text: 'This is the origin of the field’s oldest saying, and it is not a joke.',
            },
            {
              type: 'quote',
              text: 'Garbage in, garbage out.',
              author: 'A principle older than machine learning itself',
            },
            { type: 'heading', level: 2, text: 'Ways data goes wrong' },
            {
              type: 'list',
              items: [
                '**Too little of it.** A few dozen examples cannot show a real pattern. The model memorises them and learns nothing general.',
                '**Not representative.** Train a medical model only on data from one hospital in one country, and it may fail elsewhere on patients it never saw.',
                '**Missing values.** Real data has gaps — blank cells, unanswered fields. You must decide deliberately what to do about them.',
                '**Imbalanced.** If 99.9% of transactions are legitimate, a model can score 99.9% accuracy by always guessing "legitimate" and never catching a single fraud.',
                '**Encoded bias.** As in the hiring example, data records how the world has been, including its unfairness — not how it should be.',
                '**Wrong labels.** If humans labelled the data and made mistakes, the model learns those mistakes as truth.',
              ],
            },
            {
              type: 'callout',
              kind: 'info',
              title: 'Where the time actually goes',
              text: 'Newcomers imagine the job is mostly designing clever models. In practice, practitioners commonly report spending the majority of a project on finding, cleaning, and checking data. The modelling is often the quick part. This is not a failure of planning — it is the shape of the work.',
            },
            {
              type: 'keyPoints',
              points: [
                'Data is a table: rows are examples, columns are things you know about them.',
                'Features are the inputs you predict from; the label is the answer you predict.',
                'Regression predicts a number; classification predicts a category.',
                'A model can only learn what the data shows it — including its mistakes and biases.',
                'Most real project time goes into data, not into models.',
              ],
            },
            {
              type: 'quiz',
              question:
                'You want to predict whether a customer will cancel their subscription next month. What kind of problem is this, and what is the label?',
              options: [
                'Regression; the label is the customer’s age',
                'Classification; the label is whether they cancelled (yes or no)',
                'Regression; the label is the subscription price',
                'Classification; the label is the customer’s name',
              ],
              answer: 1,
              explanation:
                'The thing you are predicting is the label, and here that is cancelled-or-not — two categories, so classification. Age and price would be features (inputs you know), not the label. A name is neither: it identifies a customer but has no predictive value, and would be dropped before training.',
            },
          ],
        },
      ],
    },
    {
      title: 'Chapter 2 — How Machines Actually Learn',
      lessons: [
        {
          slug: 'first-model',
          title: 'Your First Model, Drawn by Hand',
          description:
            'Before any code or maths, we build a working model on paper using nothing but a straight line.',
          duration: 12,
          blocks: [
            {
              type: 'recap',
              points: [
                'Features are inputs; the label is the answer you want to predict.',
                'Regression predicts numbers, classification predicts categories.',
                'The model learns whatever the data shows it, good or bad.',
              ],
            },
            {
              type: 'paragraph',
              text: 'We are going to build a machine learning model right now, with no computer. Just a mental picture. By the end of this lesson you will understand what a model *is*, which is the concept everything else rests on.',
            },
            { type: 'heading', level: 2, text: 'A deliberately tiny problem' },
            {
              type: 'paragraph',
              text: 'Suppose we want to predict a house’s price from one single feature: its size. We have five houses with known prices.',
            },
            {
              type: 'table',
              headers: ['Size (sq ft)', 'Price (£)'],
              rows: [
                ['900', '198,000'],
                ['1,100', '215,000'],
                ['1,400', '245,000'],
                ['1,850', '310,000'],
                ['2,300', '389,000'],
              ],
            },
            {
              type: 'paragraph',
              text: 'Now picture plotting these on a graph. Size runs along the bottom, price runs up the side. Each house becomes a dot. Looking at those five dots, you would notice they climb roughly from bottom-left to top-right: bigger houses cost more. Not perfectly, but clearly.',
            },
            {
              type: 'paragraph',
              text: 'Here is the crucial step. Take a ruler and draw a single straight line through the middle of those dots — as close to all of them as you can manage.',
            },
            {
              type: 'callout',
              kind: 'success',
              title: 'You have just built a model',
              text: 'That line is a machine learning model. It is not a metaphor for one. It is genuinely what a simple model is: a rule that takes a feature and produces a prediction. Ask "what about a 1,600 sq ft house?", find 1,600 along the bottom, go up to the line, read across. That number is your prediction.',
            },
            {
              type: 'definition',
              term: 'Model',
              plain:
                'A rule that turns inputs into a prediction. It can be a line, a decision tree, or a neural network with billions of numbers — but it always does that one job.',
              formal:
                'A mathematical function mapping input features to an output, whose internal values were determined by fitting to training data.',
            },
            { type: 'heading', level: 2, text: 'Writing the line down' },
            {
              type: 'paragraph',
              text: 'Any straight line can be described with just two numbers. You may have met this at school as y = mx + c. Do not worry if that means nothing to you — here it is in plain terms:',
            },
            {
              type: 'list',
              items: [
                '**The slope** — how steeply the line climbs. Here it means: for each extra square foot, how much does the price go up? Say roughly £136 per square foot.',
                '**The starting point** — where the line sits when size is zero. On its own it is not meaningful (a zero-size house), but it shifts the whole line up or down to fit better. Say around £77,000. You will see this called the **bias** or the **intercept** in other material; all three names mean this same number.',
              ],
            },
            {
              type: 'paragraph',
              text: 'So the entire model is: `price = 136 × size + 77,000`. Two numbers. That is the whole thing.',
            },
            {
              type: 'paragraph',
              text: 'Try it on the 1,400 sq ft house: 136 × 1,400 = 190,400, plus 77,000 gives **£267,400**. The real price was £245,000. So we are about £22,000 too high — not perfect, but in the right neighbourhood from two numbers and a ruler.',
            },
            {
              type: 'definition',
              term: 'Parameters (or weights)',
              plain:
                'The numbers inside a model that determine its behaviour — here, the 136 and the 77,000. Learning means finding good values for these.',
              formal:
                'The internal variables adjusted during training. GPT-scale language models have hundreds of billions of them; our line has two.',
            },
            {
              type: 'analogy',
              title: 'Parameters are the knobs',
              text: 'Picture an old radio with two dials. Turning them changes what you hear, and there is some setting where the station comes through clearly. The dials are parameters. Training is the process of turning them until the signal is as clear as it can get. A large AI model is the same idea with a hundred billion dials — which is why it needs a machine to turn them rather than a hand.',
            },
            { type: 'heading', level: 2, text: 'What makes one line better than another' },
            {
              type: 'paragraph',
              text: 'You could draw many lines through those dots. Some obviously look better than others. But "looks better" is not something a computer can act on, so we need to turn it into a number.',
            },
            {
              type: 'paragraph',
              text: 'The method is simple. For every house, measure the gap between what the line predicts and the true price. That gap is the **error**. Then combine all the errors into one score.',
            },
            {
              type: 'table',
              headers: ['Size', 'True price', 'Line predicts', 'Error'],
              rows: [
                ['900', '£198,000', '£199,400', '+£1,400'],
                ['1,100', '£215,000', '£226,600', '+£11,600'],
                ['1,400', '£245,000', '£267,400', '+£22,400'],
                ['1,850', '£310,000', '£328,600', '+£18,600'],
                ['2,300', '£389,000', '£389,800', '+£800'],
              ],
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'Why we square the errors',
              text: 'You cannot just add errors up, because positive and negative ones would cancel out — a wildly wrong line could score zero. So each error is squared first, which makes every value positive. Squaring has a useful side effect: it punishes large mistakes far more than small ones. Being wrong by 10 scores 100, but being wrong by 20 scores 400 — four times worse, not twice.',
            },
            {
              type: 'definition',
              term: 'Loss function',
              plain:
                'The formula that scores how wrong a model is, as one number. Lower is better. Training means searching for parameters that make this number small.',
              formal:
                'A function measuring the discrepancy between predictions and true values. The squared-error version above is called Mean Squared Error (MSE).',
            },
            {
              type: 'callout',
              kind: 'danger',
              title: 'The loss function is the model’s entire definition of "good"',
              text: 'A model has no idea what you actually want. It only knows the loss. If your loss rewards something you did not intend, the model will pursue that instead — perfectly obediently and completely uselessly. This causes more real-world AI failures than any technical bug.',
            },
            {
              type: 'exercise',
              prompt:
                'Our line predicted £267,400 for a house that actually sold for £245,000. Suppose a different line predicts £238,000 for the same house. Which line is better on this house, and by how much does the error change?',
              hint: 'Find the size of each gap, ignoring whether it is above or below. Then compare.',
              solution:
                'The first line is off by 267,400 − 245,000 = £22,400 (too high). The second is off by 245,000 − 238,000 = £7,000 (too low). The second line is better on this house, with an error about three times smaller. Note that being under and being over are treated the same — squaring removes the direction, because a £7,000 mistake is a £7,000 mistake either way.',
            },
            {
              type: 'keyPoints',
              points: [
                'A model is any rule turning inputs into predictions — a straight line qualifies.',
                'Parameters are the numbers inside the model; learning means finding good values for them.',
                'Error is the gap between prediction and truth on one example.',
                'A loss function combines all errors into one score, where lower is better.',
                'Errors are squared so they cannot cancel out, and so big mistakes hurt more.',
                'The loss function is the only definition of "good" the model has.',
              ],
            },
            {
              type: 'quiz',
              question: 'Why do we square errors instead of simply adding them together?',
              options: [
                'It is a convention with no real reason',
                'Squaring makes the arithmetic faster',
                'So positive and negative errors cannot cancel out, and so large mistakes are penalised more heavily',
                'Because prices are always positive',
              ],
              answer: 2,
              explanation:
                'Both reasons matter. Without squaring, a model that is +50,000 wrong on one house and −50,000 wrong on another would score a perfect zero despite being badly wrong twice. Squaring also means a single large error contributes far more to the score than several small ones, pushing the model to avoid big misses.',
            },
          ],
        },
        {
          slug: 'how-models-learn',
          title: 'How Learning Actually Happens: Gradient Descent',
          description:
            'The four-step loop behind nearly every AI system, explained with a hill-walking analogy before any code.',
          duration: 14,
          blocks: [
            {
              type: 'recap',
              points: [
                'A model is a rule with parameters — our line had two.',
                'A loss function scores how wrong the model is, as a single number.',
                'We want the parameters that make the loss as small as possible.',
              ],
            },
            {
              type: 'paragraph',
              text: 'In the last lesson you drew the line by eye. A computer cannot do that. So how does it find good parameters? The answer is one procedure used by almost every AI system in existence, from our two-number line to models with hundreds of billions of parameters. Understand it once and you understand training in general.',
            },
            { type: 'heading', level: 2, text: 'Walking downhill in fog' },
            {
              type: 'analogy',
              title: 'The core idea, before any maths',
              text: 'Imagine you are standing on a hillside in thick fog. You want to reach the valley floor, but you can only see one metre in any direction. What do you do? You feel which way the ground slopes downward, take a step that way, and repeat. You cannot see the valley, but each step gets you lower. Eventually you arrive at the bottom. That is the entire algorithm.',
            },
            {
              type: 'paragraph',
              text: 'Now translate the picture. **Your position on the hill** is the current parameter values. **Your altitude** is the loss — how wrong the model currently is. **The valley floor** is the parameter setting with the lowest possible loss. And **feeling which way is downhill** is a calculation called the gradient.',
            },
            {
              type: 'definition',
              term: 'Gradient',
              plain:
                'For each parameter, a number saying which direction to change it to make the loss go *up*. Since we want the loss down, we move the opposite way.',
              formal:
                'The vector of partial derivatives of the loss with respect to each parameter. It points in the direction of steepest increase.',
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'If "derivative" is unfamiliar, do not worry',
              text: 'You do not need calculus to follow this course. All you need is the idea: the gradient is a number that tells us which way to nudge each parameter, and by roughly how much. The computer works it out; you just need to know what it is for.',
            },
            { type: 'heading', level: 2, text: 'The four-step loop' },
            {
              type: 'paragraph',
              text: 'Every training run, for essentially every model, is these four steps repeated over and over. This is the most important diagram in the course.',
            },
            {
              type: 'steps',
              items: [
                {
                  title: 'Predict',
                  text: 'Feed an example through the model using the current parameters, and see what comes out. At the very start the parameters are random, so the output is nonsense. That is expected and completely fine.',
                },
                {
                  title: 'Measure how wrong it was',
                  text: 'Compare that prediction with the true answer using the loss function. This gives one number: our current altitude on the hill.',
                },
                {
                  title: 'Work out which way is downhill',
                  text: 'Compute the gradient — for every parameter, which direction would make things worse. This is the "feeling the slope" step.',
                },
                {
                  title: 'Take a small step',
                  text: 'Nudge every parameter slightly in the *opposite* direction to its gradient, so the loss goes down rather than up. Then go back to step 1 and repeat, thousands or millions of times.',
                },
              ],
            },
            {
              type: 'definition',
              term: 'Gradient descent',
              plain:
                'The name for that whole loop — repeatedly stepping downhill until the loss stops improving. "Descent" because you are going down.',
            },
            {
              type: 'definition',
              term: 'Learning rate',
              plain:
                'How big a step to take each time. Too small and you crawl. Too big and you leap past the valley and end up higher than you started.',
              formal:
                'A hyperparameter scaling the size of each parameter update. Typically a small value such as 0.01 or 0.001.',
            },
            {
              type: 'definition',
              term: 'Hyperparameter',
              plain:
                'A setting *you* choose before training starts, as opposed to a parameter the model learns for itself. The learning rate is one. So is how many steps to run.',
              formal:
                'A configuration value not optimised by the training procedure. Chosen by hand, or searched over using the validation set.',
            },
            {
              type: 'analogy',
              title: 'Why step size matters so much',
              text: 'Back on the foggy hillside. Take baby steps and you will reach the valley, but it may take until nightfall. Take enormous leaping strides and you will bound straight across the valley and up the opposite slope, then leap back over, bouncing forever without settling. Getting this size right is the single most common thing people have to fix when training misbehaves.',
            },
            { type: 'heading', level: 2, text: 'Seeing it happen' },
            {
              type: 'paragraph',
              text: 'Here is the entire idea as real code. Do not worry about the syntax — read the comments and match them to the four steps above. This program starts with deliberately terrible parameters and discovers good ones on its own.',
            },
            {
              type: 'code',
              language: 'python',
              filename: 'gradient_descent.py',
              highlight: [17, 18, 20, 21, 24, 25, 27, 28, 29],
              code: `import numpy as np

# Make some fake data where we know the right answer in advance,
# so we can check whether learning actually worked.
# The true relationship is: y = 3x + 7
rng = np.random.default_rng(0)
X = rng.uniform(0, 10, size=200)
y = 3.0 * X + 7.0 + rng.normal(0, 1.5, size=200)   # + a little noise

# Start with deliberately wrong parameters. The model knows nothing yet.
w = 0.0     # the slope        (true value: 3)
b = 0.0     # the offset       (true value: 7)

lr = 0.01   # learning rate — our step size
n = len(X)

for epoch in range(2000):
    # STEP 1: Predict, using whatever parameters we currently have.
    y_hat = w * X + b

    # STEP 2: Measure how wrong we were (mean squared error).
    loss = np.mean((y_hat - y) ** 2)

    # STEP 3: Work out which way is downhill for each parameter.
    error = y_hat - y
    dw = (2 / n) * np.dot(error, X)   # slope's gradient
    db = (2 / n) * np.sum(error)      # offset's gradient

    # STEP 4: Step the OPPOSITE way to the gradient, to go downhill.
    w -= lr * dw
    b -= lr * db

    if epoch % 400 == 0:
        print(f"step {epoch:>5} | loss {loss:9.3f} | w {w:.3f} | b {b:.3f}")

print(f"learned: y = {w:.2f}x + {b:.2f}")`,
            },
            {
              type: 'paragraph',
              text: 'Running it prints something like this. Watch the loss collapse and the parameters settle near their true values of 3 and 7. Your exact numbers will differ slightly, because the data has random noise added to it:',
            },
            {
              type: 'code',
              language: 'text',
              filename: 'output',
              code: `step     0 | loss   574.579 | w 2.774 | b 0.447
step   400 | loss     2.097 | w 3.083 | b 6.412
step   800 | loss     1.856 | w 2.956 | b 7.264
step  1200 | loss     1.850 | w 2.937 | b 7.390
step  1600 | loss     1.850 | w 2.934 | b 7.408

learned: y = 2.93x + 7.41`,
            },
            {
              type: 'callout',
              kind: 'success',
              title: 'Look at what just happened',
              text: 'Nobody told the program that the answer was 3 and 7. It started at 0 and 0, and by repeatedly measuring its error and stepping downhill, it discovered them. That is machine learning. Everything else in this field is a more elaborate version of these four steps.',
            },
            { type: 'heading', level: 2, text: 'When training goes wrong' },
            {
              type: 'table',
              headers: ['What you see', 'What it usually means', 'What to try first'],
              rows: [
                ['Loss becomes "NaN" quickly', 'Steps are so large the numbers explode beyond what a computer can store', 'Reduce the learning rate by 10×'],
                ['Loss bounces up and down', 'Step size slightly too large — overshooting the valley each time', 'Reduce the learning rate by 2–3×'],
                ['Loss falls incredibly slowly', 'Step size too small', 'Increase the learning rate by 3–10×'],
                ['Loss falls then flattens high', 'Model may be too simple for the pattern', 'Add features, or use a more flexible model'],
                ['Loss is zero almost immediately', 'Something is wrong — often the answer leaked into the inputs', 'Check for a feature that gives the answer away'],
              ],
            },
            {
              type: 'callout',
              kind: 'info',
              title: 'Why this scales to enormous models',
              text: 'Our example had 2 parameters. A large language model has hundreds of billions. Not one of the four steps changes. The only difference is a technique called backpropagation, which computes all those billions of gradients efficiently in one pass. The scale changes the engineering enormously; it does not change the idea you just learned.',
            },
            {
              type: 'exercise',
              prompt:
                'Someone runs the code above and the loss shows as NaN by step 30. Before changing anything else, what one setting should they adjust, and in which direction?',
              hint: 'NaN means the numbers grew too large for the computer to represent. What causes values to grow rather than shrink each step?',
              solution:
                'Lower the learning rate — typically by a factor of 10, so 0.01 becomes 0.001. NaN early in training almost always means each step is overshooting so badly that the parameters grow larger every time instead of settling, until they exceed the largest number the computer can store. It is tempting to blame the data or the model, but learning rate is the culprit in the overwhelming majority of cases, and it is the cheapest thing to test.',
            },
            {
              type: 'keyPoints',
              points: [
                'Training is a loop: predict, measure loss, find the downhill direction, take a small step.',
                'The gradient tells you which way makes the loss worse, so you step the opposite way.',
                'Learning rate is the step size — the first thing to adjust when training misbehaves.',
                'NaN loss almost always means the learning rate is too high.',
                'The same four steps train a 2-parameter line and a 500-billion-parameter language model.',
              ],
            },
            {
              type: 'quiz',
              question:
                'During training, why do we move parameters in the opposite direction to the gradient?',
              options: [
                'Because gradients are always negative',
                'To stop the model memorising the data',
                'To make training run faster',
                'Because the gradient points towards higher loss, and we want lower loss',
              ],
              answer: 3,
              explanation:
                'The gradient points in the direction of steepest *increase* in loss — uphill. Since our goal is minimum loss, we step the other way, downhill. This is exactly why the procedure is called gradient *descent*.',
            },
          ],
        },
        {
          slug: 'overfitting-and-generalisation',
          title: 'Why a Perfect Score Can Mean Failure',
          description:
            'Overfitting explained from scratch — the trap that catches nearly every beginner, and how to avoid it.',
          duration: 13,
          blocks: [
            {
              type: 'recap',
              points: [
                'Training repeatedly nudges parameters to make the loss smaller.',
                'Lower loss means the model fits its training examples better.',
                'Which raises an obvious question: is lower loss always better?',
              ],
            },
            {
              type: 'paragraph',
              text: 'Here is the counterintuitive heart of machine learning. A model that scores **perfectly** on the data it trained on may be completely worthless. Understanding why is what separates people who can build working systems from people who cannot.',
            },
            { type: 'heading', level: 2, text: 'Memorising is not learning' },
            {
              type: 'analogy',
              title: 'Two students preparing for an exam',
              text: 'Anya works through past papers until she understands the underlying principles. Ben memorises the answers to all 200 past questions word for word. Test them on those 200 questions and Ben scores 100%, beating Anya. But put a new exam in front of them and Ben collapses, because he never learned anything transferable — he learned 200 specific answers. Ben is an overfitted model.',
            },
            {
              type: 'definition',
              term: 'Overfitting',
              plain:
                'When a model memorises its training examples, including their random quirks, instead of learning the general pattern. It looks brilliant on data it has seen and fails on anything new.',
              formal:
                'A model with excessively low training error relative to its error on held-out data, having fitted noise as though it were signal.',
            },
            {
              type: 'definition',
              term: 'Underfitting',
              plain:
                'The opposite problem — the model is too simple to capture the real pattern, so it does badly everywhere, including on its own training data.',
            },
            {
              type: 'paragraph',
              text: 'Picture our house-price dots again. Underfitting is drawing a flat horizontal line through them — too rigid to capture the upward trend. Overfitting is drawing a wild, wiggly curve that passes exactly through every dot, twisting through every random fluctuation. The straight line, sitting between those extremes, is what we want.',
            },
            {
              type: 'callout',
              kind: 'info',
              title: 'The thing to internalise',
              text: 'You do not care how well a model performs on data it has already seen. You already know those answers. The only performance that matters is on data the model has never encountered — because that is the only situation it will ever face in real use.',
            },
            { type: 'heading', level: 2, text: 'The solution: hide some data' },
            {
              type: 'paragraph',
              text: 'The fix is simple. Before training, hide some of your data. Train on the rest. Then test on the hidden portion, which the model has never seen. If it does well on data it could not have memorised, it has genuinely learned something.',
            },
            {
              type: 'paragraph',
              text: 'Standard practice splits data three ways rather than two.',
            },
            {
              type: 'steps',
              items: [
                {
                  title: 'Training set — around 70%',
                  text: 'The examples the model actually learns from. This is the only data that adjusts the parameters.',
                },
                {
                  title: 'Validation set — around 15%',
                  text: 'Used while developing to compare choices: which model, which learning rate, which features. You may check this as often as you like.',
                },
                {
                  title: 'Test set — around 15%',
                  text: 'Locked away and touched exactly once, at the very end, to get an honest estimate of real-world performance.',
                },
              ],
            },
            {
              type: 'callout',
              kind: 'danger',
              title: 'Why the test set must stay sealed',
              text: 'Every time you check the test score and then change something, information from that test set leaks into your decisions. Do it twenty times and you have effectively tuned the model to the test set — your final number is optimistic, and reality will be worse. Look once, at the end, after everything is frozen.',
            },
            { type: 'heading', level: 2, text: 'Diagnosing from two numbers' },
            {
              type: 'paragraph',
              text: 'Compare training error with validation error and the diagnosis usually falls straight out.',
            },
            {
              type: 'comparison',
              title: 'Reading the two error numbers',
              left: {
                label: 'Overfitting',
                items: [
                  'Training error: very low',
                  'Validation error: much higher',
                  'The gap grows the longer you train',
                  'Fix: get more training data',
                  'Fix: use a simpler model',
                  'Fix: stop training earlier',
                ],
              },
              right: {
                label: 'Underfitting',
                items: [
                  'Training error: high',
                  'Validation error: also high, and similar',
                  'Both flatten out early and stay there',
                  'Fix: use a more flexible model',
                  'Fix: add more useful features',
                  'Fix: train for longer',
                ],
              },
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'A rule of thumb worth memorising',
              text: 'Big gap between training and validation error means overfitting. Both numbers bad and close together means underfitting. That one sentence diagnoses most problems you will meet.',
            },
            { type: 'heading', level: 2, text: 'Data leakage: the silent project killer' },
            {
              type: 'paragraph',
              text: 'There is one failure worse than overfitting, because it hides so well. It produces spectacular results in testing and total failure in production.',
            },
            {
              type: 'definition',
              term: 'Data leakage',
              plain:
                'When information the model would not have at prediction time sneaks into training — so it is effectively being shown the answer during practice.',
            },
            {
              type: 'analogy',
              title: 'The exam with the answers printed on the back',
              text: 'Imagine a student who scores 100% on every practice paper, then fails the real exam badly. Investigating, you find the practice papers had the answers printed faintly on the reverse. They were not studying, they were reading answers — and no one noticed because the scores looked wonderful.',
            },
            {
              type: 'list',
              items: [
                '**A feature that gives the answer away.** Predicting fraud using a column called `refund_issued` — refunds only happen *after* fraud is confirmed, so it will never be available when you actually need to predict.',
                '**Preparing data before splitting.** Scaling using the average of the *whole* dataset means your training data has absorbed information about the test data.',
                '**Splitting time-based data randomly.** The model trains on future events and predicts the past, which it will never be able to do in reality.',
                '**Duplicate rows on both sides.** The same example in training and test is memorisation dressed up as generalisation.',
                '**Splitting grouped data by row.** Different scans from the same patient in both sets means recognising the patient, not the condition.',
              ],
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'The suspicion rule',
              text: 'If your very first model achieves 99% accuracy on a problem humans find hard, do not celebrate — go hunting for leakage. In practice it is there far more often than genius is. Genuinely difficult problems do not usually surrender on the first attempt.',
            },
            {
              type: 'exercise',
              prompt:
                'A team builds a model to predict which patients will be readmitted to hospital within 30 days. It scores 97% in testing but performs poorly once deployed. One of their features is `discharge_summary_length`. Can you see the problem?',
              hint: 'Ask when that value becomes known, relative to when the prediction needs to be made.',
              solution:
                'The discharge summary is written when a patient leaves, and longer summaries tend to indicate more complicated cases — which are more likely to be readmitted. The feature is not predicting readmission so much as encoding how sick the patient already was, recorded at a point that may come after the moment you need the prediction. Worse, if predictions are meant to be made *during* the stay to plan care, the summary does not exist yet at all. The test for every feature is: will this value genuinely be available, in this form, at the moment I need to predict?',
            },
            {
              type: 'keyPoints',
              points: [
                'Performance on unseen data is the only performance that counts.',
                'Overfitting is memorising; underfitting is being too simple to learn the pattern.',
                'Split data into training, validation, and test — and open the test set only once.',
                'Large train–validation gap means overfitting; both bad and similar means underfitting.',
                'Leakage means the answer sneaked into the inputs; suspect it when results look too good.',
              ],
            },
            {
              type: 'quiz',
              question:
                'You scale your features using the average of the entire dataset, then split into training and test sets. What has gone wrong?',
              options: [
                'Data leakage: the training data has absorbed information about the test set',
                'The model will now underfit',
                'Scaling should always be done after training instead',
                'Nothing — scaling is always a safe operation',
              ],
              answer: 0,
              explanation:
                'The average was computed using test-set values, so information about the test data is now baked into how the training data was prepared. Your test score is therefore optimistic. The correct order is: split first, compute the average from the training set only, then apply that same value to validation and test.',
            },
          ],
        },
      ],
    },
    {
      title: 'Chapter 3 — Neural Networks Demystified',
      lessons: [
        {
          slug: 'neural-networks',
          title: 'What a Neural Network Really Is',
          description:
            'No brain metaphors, no mystery. A neural network built up one piece at a time from what you already know.',
          duration: 15,
          blocks: [
            {
              type: 'recap',
              points: [
                'A model turns inputs into predictions using parameters.',
                'Gradient descent finds good parameters by repeatedly stepping downhill on the loss.',
                'A straight line worked, but real patterns are rarely straight.',
              ],
            },
            {
              type: 'paragraph',
              text: 'Neural networks have an unhelpful reputation for being mysterious and brain-like. They are neither. A neural network is our straight line, repeated many times and stacked in layers, with one small addition. That is genuinely all. Let us build one.',
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'About the brain comparison',
              text: 'Neural networks were loosely inspired by neurons in the 1950s, and the name stuck. But a modern network resembles a biological brain roughly as much as an aeroplane resembles a bird. The metaphor causes more confusion than insight, so we will drop it entirely.',
            },
            { type: 'heading', level: 2, text: 'Step 1: one neuron is one line' },
            {
              type: 'paragraph',
              text: 'Recall our house model: `price = 136 × size + 77,000`. Take one feature, multiply by a weight, add an offset, output a number.',
            },
            {
              type: 'paragraph',
              text: 'A single **neuron** does exactly this, just with more inputs. Give it four features and it multiplies each by its own weight, adds them all up, adds an offset, and outputs one number.',
            },
            {
              type: 'code',
              language: 'python',
              filename: 'one_neuron.py',
              code: `# A neuron with four inputs. Nothing here is mysterious —
# it is multiply, add, multiply, add.

def neuron(features, weights, offset):
    total = offset
    for f, w in zip(features, weights):
        total += f * w
    return total


house = [1400, 3, 15, 8.2]           # size, bedrooms, age, distance
weights = [136.0, 5000.0, -800.0, -2000.0]
offset = 50_000

#   50,000 + 190,400 + 15,000 - 12,000 - 16,400
print(neuron(house, weights, offset))   # 227,000`,
            },
            {
              type: 'paragraph',
              text: 'Notice the negative weights. Age has weight −800, meaning each year older reduces the predicted price by £800. The model can learn that some features push a prediction down as naturally as others push it up.',
            },
            { type: 'heading', level: 2, text: 'Step 2: the problem with only lines' },
            {
              type: 'paragraph',
              text: 'Here is a genuine limitation. If you stack these neurons in layers, feeding one layer’s output into the next, you gain nothing at all. A line of a line is still a line. A hundred layers of pure multiply-and-add collapse mathematically into a single multiply-and-add.',
            },
            {
              type: 'paragraph',
              text: 'That matters because most real relationships are not straight. Doubling a house’s size does not exactly double its price. A drug’s effect does not increase forever with dose. Real patterns bend.',
            },
            {
              type: 'definition',
              term: 'Activation function',
              plain:
                'A small operation applied to each neuron’s output that bends the straight line. Without it, stacking layers is pointless. With it, networks can represent almost any pattern.',
            },
            {
              type: 'paragraph',
              text: 'The most common one is almost comically simple. It is called ReLU, and here it is in full:',
            },
            {
              type: 'code',
              language: 'python',
              filename: 'relu.py',
              code: `def relu(x):
    return max(0, x)      # negatives become 0, positives pass through

# relu(-5)  ->  0
# relu(0)   ->  0
# relu(3.2) ->  3.2`,
            },
            {
              type: 'callout',
              kind: 'info',
              title: 'That is really the whole function',
              text: 'It seems far too simple to matter. But that single kink at zero is enough to break the "line of a line is a line" problem. Stack enough of these bent pieces and you can approximate any shape at all — the same way enough short straight segments can trace a smooth curve.',
            },
            {
              type: 'analogy',
              title: 'Bending a wire',
              text: 'A straight wire can only ever be straight, however many you lay end to end. But put one small bend in each, and suddenly you can trace any outline you like — a circle, a signature, a coastline. The activation function is that bend, and it is why depth buys you anything.',
            },
            { type: 'heading', level: 2, text: 'Step 3: layers' },
            {
              type: 'paragraph',
              text: 'Now assemble. A **layer** is a group of neurons all receiving the same inputs but each having its own weights, so each learns to detect something different. A **network** is layers stacked so one layer’s outputs become the next layer’s inputs.',
            },
            {
              type: 'steps',
              items: [
                {
                  title: 'Input layer',
                  text: 'Your raw features. For our house: size, bedrooms, age, distance. No computation happens here — it is just the data arriving.',
                },
                {
                  title: 'Hidden layers',
                  text: 'One or more layers in the middle. Each neuron computes its weighted sum and applies the activation function. "Hidden" only means you do not directly observe their values. This is where the useful work happens.',
                },
                {
                  title: 'Output layer',
                  text: 'Produces the final answer. One neuron for predicting a single number. For classifying into 10 categories, ten neurons — one score per category.',
                },
              ],
            },
            {
              type: 'definition',
              term: 'Deep learning',
              plain:
                'Just this: using a neural network with several hidden layers. "Deep" refers to having many layers. There is no further secret in the name.',
            },
            { type: 'heading', level: 2, text: 'Why depth is powerful' },
            {
              type: 'paragraph',
              text: 'Here is the property that makes deep learning transformative. Each layer builds on what the layer before it found, so the network constructs increasingly sophisticated concepts on its own.',
            },
            {
              type: 'paragraph',
              text: 'In a network trained to recognise faces, researchers found layers had specialised without ever being told to:',
            },
            {
              type: 'table',
              headers: ['Layer', 'What it learned to detect', 'Was it told to?'],
              rows: [
                ['1st', 'Edges and patches of colour', 'No'],
                ['2nd', 'Corners, curves, simple textures', 'No'],
                ['3rd', 'Eyes, noses, mouths', 'No'],
                ['4th', 'Face-shaped arrangements of those parts', 'No'],
                ['Output', '"This is Aisha"', 'Only this part'],
              ],
            },
            {
              type: 'callout',
              kind: 'success',
              title: 'This is the real breakthrough',
              text: 'Nobody programmed "an eye is two curves with a dark centre". The only instruction was "get the name right", and the useful intermediate concepts emerged because they helped reduce the loss. Before deep learning, humans hand-designed those detectors, which took years per problem and did not transfer. Now the network works them out itself.',
            },
            {
              type: 'definition',
              term: 'Backpropagation',
              plain:
                'The method for working out gradients in a layered network. It calculates the error at the output, then passes blame backwards layer by layer so every weight learns how it contributed.',
            },
            {
              type: 'analogy',
              title: 'Tracing blame back through a kitchen',
              text: 'A restaurant dish comes back to the kitchen too salty. The head chef traces it back: the sauce station added too much, which came from a stock that was over-reduced, which came from a burner left too high. Blame flows backward through each step until every station knows its share. Backpropagation does the same with network layers — and, crucially, it does it for all the layers in one efficient pass rather than one at a time.',
            },
            {
              type: 'paragraph',
              text: 'And here is the reassuring part: once backpropagation has produced the gradients, training is **exactly the four-step loop you already know**. Predict, measure loss, get gradients, step downhill. Nothing new.',
            },
            {
              type: 'exercise',
              prompt:
                'Someone builds a network with 50 layers but forgets to include any activation function. They are puzzled that it performs no better than a single straight line. Explain what happened.',
              hint: 'What did we say happens when you stack pure multiply-and-add operations?',
              solution:
                'Without an activation function, every layer is just multiplying and adding — and combining those operations produces another operation of exactly the same kind. The 50 layers collapse mathematically into a single equivalent layer, so the network is a straight-line model wearing an expensive costume. It also burns 50 layers’ worth of computation to do it. Activation functions are not an optimisation or a refinement; without them, depth is literally meaningless.',
            },
            {
              type: 'keyPoints',
              points: [
                'A neuron is our straight line with more inputs: multiply each by a weight, add them, add an offset.',
                'Activation functions bend the line — without them, stacking layers achieves nothing.',
                'A network is layers of neurons, each layer feeding the next.',
                'Deep learning just means a network with several hidden layers.',
                'Layers learn increasingly complex concepts on their own, without being told to.',
                'Backpropagation computes the gradients; training is still the same four-step loop.',
              ],
            },
            {
              type: 'quiz',
              question:
                'Why does a network without activation functions gain nothing from having many layers?',
              options: [
                'It trains too slowly to be practical',
                'Stacked multiply-and-add operations collapse into a single equivalent one, so it can only ever represent a straight-line relationship',
                'The layers cannot be connected together',
                'It uses too much memory',
              ],
              answer: 1,
              explanation:
                'This is the key insight about why activation functions exist. Combining linear operations always yields another linear operation, so fifty such layers are mathematically identical to one. The activation function introduces a bend, and only then does adding depth let the network represent shapes a single line cannot.',
            },
          ],
        },
      ],
    },
    {
      title: 'Chapter 4 — Using AI in the Real World',
      lessons: [
        {
          slug: 'evaluating-models',
          title: 'Measuring Success Properly',
          description:
            'Why accuracy is often a misleading number, and the measurements professionals use instead.',
          duration: 13,
          blocks: [
            {
              type: 'recap',
              points: [
                'Models must be judged on data they have never seen.',
                'Training and validation errors together diagnose overfitting or underfitting.',
                'But "error" itself needs unpacking — not all mistakes matter equally.',
              ],
            },
            {
              type: 'paragraph',
              text: 'Accuracy is the number everyone reaches for first, and it is often actively misleading. Understanding why will change how you read every AI claim you encounter.',
            },
            { type: 'heading', level: 2, text: 'The 99.9% accurate model that is useless' },
            {
              type: 'paragraph',
              text: 'Suppose you build a model to detect fraudulent credit card transactions. Out of every 1,000 transactions, 1 is fraud. You proudly report 99.9% accuracy.',
            },
            {
              type: 'callout',
              kind: 'danger',
              title: 'Here is the catch',
              text: 'A model that simply answers "not fraud" every single time, without looking at anything, also scores 99.9%. It catches zero fraud. It provides no value whatsoever. And by the accuracy measure it is indistinguishable from a genuinely good model.',
            },
            {
              type: 'definition',
              term: 'Class imbalance',
              plain:
                'When one category is far more common than another. Accuracy becomes meaningless here, because always guessing the common answer scores well.',
            },
            { type: 'heading', level: 2, text: 'The four possible outcomes' },
            {
              type: 'paragraph',
              text: 'For a yes/no prediction there are exactly four things that can happen. Getting comfortable with these unlocks every serious evaluation measure.',
            },
            {
              type: 'table',
              headers: ['Name', 'What happened', 'Fraud example'],
              rows: [
                ['True positive', 'Said yes, and it was yes', 'Flagged a transaction that really was fraud ✓'],
                ['True negative', 'Said no, and it was no', 'Ignored a transaction that really was fine ✓'],
                ['False positive', 'Said yes, but it was no', 'Blocked a customer’s legitimate purchase ✗'],
                ['False negative', 'Said no, but it was yes', 'Let a genuine fraud go through ✗'],
              ],
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'Remembering which is which',
              text: 'The second word is what the model *said*. The first word is whether it was *right*. So a "false positive" is the model saying positive and being wrong.',
            },
            {
              type: 'paragraph',
              text: 'The vital point is that the two kinds of mistake are not equally bad, and which one hurts more depends entirely on the situation.',
            },
            {
              type: 'comparison',
              title: 'The same two errors, very different stakes',
              left: {
                label: 'Screening for a serious illness',
                items: [
                  'False negative: patient is ill, told they are fine',
                  'They go home untreated — potentially fatal',
                  'False positive: healthy patient flagged',
                  'They get a follow-up test — stressful, not dangerous',
                  'Conclusion: avoid false negatives, accept false positives',
                ],
              },
              right: {
                label: 'Spam filtering',
                items: [
                  'False negative: spam reaches the inbox',
                  'Mildly annoying, user deletes it',
                  'False positive: real email marked as spam',
                  'A job offer vanishes unseen — serious harm',
                  'Conclusion: avoid false positives, accept false negatives',
                ],
              },
            },
            { type: 'heading', level: 2, text: 'Precision and recall' },
            {
              type: 'paragraph',
              text: 'These two words appear everywhere in AI. They are simply ways of counting the four outcomes above, and each answers a different question.',
            },
            {
              type: 'definition',
              term: 'Precision',
              plain:
                'Of everything the model flagged, what fraction was correct? Answers: "when it raises an alarm, can I trust it?"',
              formal: 'true positives ÷ (true positives + false positives)',
            },
            {
              type: 'definition',
              term: 'Recall',
              plain:
                'Of everything that should have been flagged, what fraction did it find? Answers: "how much is it missing?"',
              formal: 'true positives ÷ (true positives + false negatives)',
            },
            {
              type: 'analogy',
              title: 'Fishing with a net',
              text: 'You are fishing for salmon. Precision asks: of everything in my net, how much is actually salmon rather than boots and seaweed? Recall asks: of all the salmon in the lake, how many did I get? A tiny fine net gives high precision but low recall — everything you catch is salmon, but you miss most of them. Dragging the whole lake gives high recall but low precision — you get every salmon, along with a great deal of rubbish.',
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'You cannot maximise both',
              text: 'Precision and recall trade off against each other. Make the model more eager to flag things and recall rises while precision falls. Make it more cautious and the reverse happens. There is no setting that maximises both, so choosing the balance is a decision about consequences — not a technical question with a correct answer.',
            },
            {
              type: 'definition',
              term: 'F1 score',
              plain:
                'A single number combining precision and recall, useful when you want one figure to compare models. It is deliberately harsh: it is only high when *both* are high.',
            },
            {
              type: 'exercise',
              prompt:
                'A model reviews 1,000 transactions. 20 are genuinely fraudulent. The model flags 30 transactions, and 15 of those are truly fraud. Work out its precision and its recall.',
              hint: 'Precision looks at the 30 it flagged. Recall looks at the 20 that were actually fraud.',
              solution:
                'Precision = 15 correct out of 30 flagged = 50%. So half of its alarms are false alarms. Recall = 15 found out of 20 that existed = 75%. So it caught three-quarters of the fraud and missed 5 cases. Notice its accuracy would be (15 true positives + 965 correctly ignored) ÷ 1000 = 98%, which sounds excellent and completely conceals that half its alerts are wrong and it missed a quarter of the fraud. This is exactly why professionals rarely report accuracy alone.',
            },
            {
              type: 'keyPoints',
              points: [
                'Accuracy is misleading whenever one category dominates the data.',
                'Every yes/no prediction lands in one of four boxes: true/false positive/negative.',
                'False positives and false negatives cause different harms — context decides which is worse.',
                'Precision: can I trust an alarm? Recall: how much is being missed?',
                'The two trade off; choosing the balance is a decision about consequences, not a formula.',
              ],
            },
            {
              type: 'quiz',
              question:
                'A hospital screening tool must avoid missing any patient who has a disease, even if that means more healthy patients get called back for a second test. What should it prioritise?',
              options: [
                'Equal precision and recall',
                'High precision, accepting lower recall',
                'High recall, accepting lower precision',
                'Maximum overall accuracy',
              ],
              answer: 2,
              explanation:
                'Missing a sick patient is a false negative, and recall is the measure that captures how few of those you have. Prioritising recall means catching nearly everyone who is ill, at the cost of more false alarms — healthy people called back unnecessarily. Given that a follow-up test is inconvenient while a missed diagnosis can be fatal, that is the correct trade to make.',
            },
          ],
        },
        {
          slug: 'ai-in-practice',
          title: 'Putting It All Together',
          description:
            'The full lifecycle of a real AI project, the ways it commonly goes wrong, and where to go next.',
          duration: 14,
          blocks: [
            {
              type: 'recap',
              points: [
                'You now know what models, parameters, and loss functions are.',
                'You understand gradient descent, overfitting, and honest evaluation.',
                'What remains is how these fit together on a real project.',
              ],
            },
            {
              type: 'paragraph',
              text: 'You have covered the concepts. This final lesson assembles them into the shape of an actual project, and shows you where the potholes are.',
            },
            { type: 'heading', level: 2, text: 'The lifecycle of a real project' },
            {
              type: 'steps',
              items: [
                {
                  title: '1. Define the decision, not the model',
                  text: 'Ask what action changes as a result of this prediction. If nobody would do anything differently, the project has no value however good the model. "Predict churn" is not a goal; "decide which 500 customers get a retention offer" is.',
                },
                {
                  title: '2. Check a simple rule first',
                  text: 'Try the obvious non-AI approach and measure it. Often a sensible rule captures most of the value in an afternoon. Anything you build later must beat this baseline to justify itself.',
                },
                {
                  title: '3. Gather the data',
                  text: 'Usually the longest phase by a wide margin. Find it, join it, check the labels are correct, and hunt for leakage. Fix anything that is simply *wrong* — duplicated rows, corrupt values, mislabelled examples.',
                },
                {
                  title: '4. Split, then prepare',
                  text: 'Carve out training, validation, and test *before* anything that computes a statistic from the data — scaling, filling missing values, choosing categories. Those must be fitted on the training split alone, then applied to the others. Preparing first is the most common source of leakage.',
                },
                {
                  title: '5. Start with the simplest model that could work',
                  text: 'A straightforward model that ships beats a sophisticated one that never gets finished. It is also far easier to debug when something looks wrong.',
                },
                {
                  title: '6. Evaluate against the decision',
                  text: 'Use measures that reflect real consequences, not whichever number looks best. Ask what a false positive actually costs, in money or harm.',
                },
                {
                  title: '7. Deploy, then watch it',
                  text: 'Shipping is the beginning. Monitor real-world performance, because the world changes underneath a model in ways training data cannot anticipate.',
                },
              ],
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'The advice most often ignored',
              text: 'Step 2. Teams routinely spend months on a sophisticated model without ever measuring the simple rule it was meant to beat. Sometimes the rule wins. Always, it tells you whether the complexity is buying anything.',
            },
            { type: 'heading', level: 2, text: 'Models decay after deployment' },
            {
              type: 'definition',
              term: 'Model drift',
              plain:
                'Performance degrading over time because the world has changed while the model has not. It learned yesterday’s patterns, and yesterday keeps receding.',
            },
            {
              type: 'analogy',
              title: 'A map of a growing city',
              text: 'A street map printed in 2015 was accurate then. It is still accurate about the old town centre, but useless for the new estates, the rerouted ring road, the bridge that closed. The map has not changed. The city has. A deployed model is a map, and reality keeps redeveloping.',
            },
            {
              type: 'list',
              items: [
                'A demand model trained before a pandemic, encountering an entirely different world.',
                'A fraud model whose patterns are studied by fraudsters, who then change tactics specifically to evade it.',
                'A recommendation model that shapes what users see, and therefore changes the very behaviour it learns from.',
                'A pricing model built during low inflation, meeting a period of high inflation.',
              ],
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'The uncomfortable implication',
              text: 'A deployed model is not a finished product. It is an asset requiring maintenance, monitoring, and periodic retraining — indefinitely. Projects that budget for building but not for maintaining tend to quietly stop working, often without anyone noticing for months.',
            },
            { type: 'heading', level: 2, text: 'Reading AI claims critically' },
            {
              type: 'paragraph',
              text: 'You now know enough to evaluate AI claims properly. Here are the questions that reliably separate substance from marketing.',
            },
            {
              type: 'table',
              headers: ['Ask this', 'Why it matters'],
              rows: [
                ['Tested on data it never saw?', 'Otherwise the number measures memorisation, not ability'],
                ['What was the baseline?', '"90% accurate" is worthless if guessing scores 89%'],
                ['Accuracy on imbalanced data?', 'The classic way to make a useless model look excellent'],
                ['Precision and recall, or just accuracy?', 'Reporting only accuracy often hides a bad trade-off'],
                ['Where does it fail?', 'Anyone who has tested honestly can answer this instantly'],
                ['Who is in the training data?', 'Determines who the system will work badly for'],
                ['How old is the training data?', 'Speaks to whether drift has already set in'],
              ],
            },
            {
              type: 'callout',
              kind: 'danger',
              title: 'The single most revealing question',
              text: '"When does it get things wrong?" A team that has evaluated honestly will answer immediately and specifically. Vagueness here almost always means the failure modes have not been examined — which means they will be discovered by users instead.',
            },
            { type: 'heading', level: 2, text: 'What you have learned' },
            {
              type: 'keyPoints',
              title: 'From this whole course',
              points: [
                'AI is defined by the task; machine learning derives rules from data instead of being given them.',
                'Data is a table of features (inputs) and labels (answers); its quality caps everything.',
                'A model is a rule with parameters; a loss function scores how wrong it is.',
                'Gradient descent finds good parameters by repeatedly stepping downhill on the loss.',
                'Neural networks are stacked layers of that same idea, bent by activation functions.',
                'Overfitting is memorising; only performance on unseen data means anything.',
                'Accuracy misleads on imbalanced data — precision and recall tell the real story.',
                'Models drift as the world changes, so deployment is a beginning, not an ending.',
              ],
            },
            {
              type: 'exercise',
              prompt:
                'A press release claims: "Our AI predicts equipment failure with 94% accuracy, trained on 10 years of sensor data." Using what you now know, write down three questions you would ask before believing this is useful.',
              hint: 'Think about baselines, class imbalance, and how the model was tested.',
              solution:
                'Strong questions include: (1) How often does equipment actually fail? If it is 6% of the time, then always predicting "no failure" scores 94% too — the number may be entirely hollow. (2) What are the precision and recall? Accuracy alone conceals whether it catches real failures or merely avoids false alarms by never predicting anything. (3) Was it tested on a time period after the training data, or randomly split? Random splitting on time-series sensor data lets the model see the future, which it cannot do in reality. Also worth asking: how much warning does it give (a prediction 30 seconds ahead is useless for scheduling maintenance), and does 10-year-old data still reflect current equipment?',
            },
            { type: 'heading', level: 2, text: 'Where to go from here' },
            {
              type: 'paragraph',
              text: 'You have the conceptual foundation. Two natural next steps, both on this site:',
            },
            {
              type: 'list',
              items: [
                '**Prompt Engineering** — the practical skill of getting reliable results from AI tools you use today. It requires no coding and builds directly on your understanding of how these systems behave.',
                '**LLM Engineering** — how ChatGPT and similar systems actually work internally, from tokens and embeddings through to building applications on top of them.',
              ],
            },
            {
              type: 'callout',
              kind: 'success',
              title: 'A closing thought',
              text: 'The ideas in this course — learning from examples, minimising a loss, generalising rather than memorising — are the foundation of the entire field. Every new architecture and headline model is built on them. You are no longer on the outside of this subject looking in.',
            },
            {
              type: 'quiz',
              question:
                'A model that performed well for a year gradually gets worse, though nothing in the code changed. What is the most likely explanation?',
              options: [
                'The model has run out of memory',
                'It was overfitted from the very beginning',
                'The code has developed a bug over time',
                'Model drift — the world has changed while the model stayed fixed on old patterns',
              ],
              answer: 3,
              explanation:
                'Gradual decline with no code change is the signature of drift. The model still applies the patterns it learned, but customer behaviour, market conditions, or the data pipeline have shifted beneath it. Overfitting would have shown up as poor performance immediately, not after a year of working well. The fix is retraining on recent data — and monitoring so you catch it early rather than by accident.',
            },
          ],
        },
      ],
    },
  ],
}
