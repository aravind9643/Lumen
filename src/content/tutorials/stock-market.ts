import type { Tutorial } from '../types'

export const stockMarket: Tutorial = {
  "slug": "stock-market",
  "title": "Financial Markets, Technical Analysis & Algorithmic Trading",
  "shortTitle": "Stock Markets",
  "description": "Master Indian financial markets (NSE/BSE), balance sheet fundamental analysis, candlestick technical patterns, and derivatives options trading.",
  "category": "Finance & Systems",
  "difficulty": "beginner",
  "icon": "chart",
  "tags": [
    "Financial Markets",
    "Stock Market",
    "NSE/BSE",
    "Technical Analysis",
    "Futures & Options",
    "Quantitative Finance"
  ],
  "color": "#14b8a6",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior financial or trading experience required."
  ],
  "outcomes": [
    "Understand exchange ecosystems, SEBI regulations, depository mechanisms, and order types",
    "Perform Fundamental Analysis: balance sheets, P&L, cash flow statements, and valuation ratios (P/E, P/B, ROE)",
    "Master Technical Analysis: Candlestick patterns, Trendlines, Support/Resistance, and Momentum indicators (RSI, MACD)",
    "Analyze Derivatives: Options Greeks (Delta, Gamma, Theta, Vega) and risk-managed strategies"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "market-basics-nse-bse",
          "title": "Market Basics NSE BSE",
          "description": "Master Market Basics NSE BSE with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is a Stock Market?",
                "Primary vs. Secondary Markets",
                "NSE (National Stock Exchange) and BSE (Bombay Stock Exchange)",
                "NIFTY 50 and SENSEX",
                "SEBI (The Regulator)",
                "Demat and Trading Accounts"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is the Stock Market?"
            },
            {
              "type": "definition",
              "term": "A stock market is a platform where buyers and sellers meet to trade shares of publicly listed companies.",
              "plain": "A stock market is a platform where buyers and sellers meet to trade shares of publicly listed companies."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "paragraph",
              "text": "Imagine a **Fruits & Vegetable Mandi**."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The **Farmers** (Companies) bring their produce (Shares) to the Mandi.",
                "The **Traders** (Investors) buy and sell these based on demand and quality.",
                "The **Mandi Board** (SEBI) ensures nobody cheats and everyone follows the rules."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Key Institutions in India"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**BSE (Bombay Stock Exchange)**: The oldest exchange in Asia (est. 1875). Its main index is the **SENSEX** (Top 30 companies).",
                "**NSE (National Stock Exchange)**: The largest exchange in India by volume. Its main index is the **NIFTY 50** (Top 50 companies).",
                "**SEBI (Securities and Exchange Board of India)**: The watchdog that protects investors and regulates the market.",
                "**Depository (NSDL/CDSL)**: Where your shares are kept in digital form (Demat)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 How Trading Works"
            },
            {
              "type": "paragraph",
              "text": "To participate, you need two things:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Trading Account**: To buy and sell.",
                "**Demat Account**: To store your shares (like a bank account for shares).",
                "Find the current value of **NIFTY 50** and **SENSEX** today.",
                "Research the difference between a **Full-service Broker** (like ICICI Direct) and a **Discount Broker** (like Zerodha/Upstox).",
                "Identify 5 companies that are part of the NIFTY 50.",
                "Why did SEBI introduce the T+1 settlement cycle in India?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Market Basics NSE BSE, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Market Basics NSE BSE."
              ],
              "answer": 3,
              "explanation": "Market Basics NSE BSE is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "core-terminology-ipos",
          "title": "Core Terminology IPOs",
          "description": "Master Core Terminology IPOs with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Face Value, Book Value, and Market Value",
                "Dividends and Bonus Shares",
                "Market Capitalization (Small, Mid, Large Cap)",
                "What is an IPO? (Initial Public Offering)",
                "Blue-chip vs. Penny Stocks"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Market Capitalization"
            },
            {
              "type": "paragraph",
              "text": "The total value of a company on the stock exchange."
            },
            {
              "type": "paragraph",
              "text": "**Formula**: `Current Share Price × Total Number of Outstanding Shares`."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Large Cap**: Stable, top 100 companies (e.g., Reliance, HDFC Bank).",
                "**Mid Cap**: Growing fast, ranked 101-250 (e.g., Polycab, Astral).",
                "**Small Cap**: High risk/reward, ranked 251+ (e.g., Suzlon, Zomato)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 What is an IPO?"
            },
            {
              "type": "paragraph",
              "text": "An IPO is the first time a private company offers its shares to the public to raise capital for expansion."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**ASBA**: The process used to block money in your bank account for an IPO application.",
                "**Listing Gains**: The profit made if the stock opens at a price higher than the issue price."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Corporate Actions"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Dividend**: A portion of profits shared with shareholders.",
                "**Stock Split**: Dividing one share into multiple (e.g., 1:10) to make it more affordable.",
                "**Bonus Issue**: Giving free shares to existing shareholders."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Calculate the Market Cap of a company if its share price is ₹1500 and it has 1 crore shares.",
                "Check the \"IPO Watch\" on any financial news site (like Moneycontrol) and list 2 upcoming IPOs.",
                "What is the difference between a **Red Herring Prospectus (RHP)** and a final Prospectus?",
                "Look up a company that recently announced a \"Dividend\" and find the \"Ex-Date\"."
              ]
            },
            {
              "type": "quiz",
              "question": "In Core Terminology IPOs, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Core Terminology IPOs.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Core Terminology IPOs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "fundamental-analysis-ratios",
          "title": "Fundamental Analysis Ratios",
          "description": "Master Fundamental Analysis Ratios with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "P/E Ratio (Price-to-Earnings)",
                "P/B Ratio (Price-to-Book)",
                "Debt-to-Equity Ratio",
                "ROE (Return on Equity) and ROCE (Return on Capital Employed)",
                "EPS (Earnings Per Share)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Valuation Ratios"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**P/E Ratio**: Tells you how much you are paying for ₹1 of profit."
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Low P/E could mean the stock is undervalued or in trouble.",
                "High P/E could mean the stock is overvalued or has high growth expectations."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**P/B Ratio**: Compares market price to the company's book value. Very useful for Banking and Finance stocks."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Efficiency Ratios"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**ROE**: Measures how effectively management uses shareholders' money to generate profit. (Goal: >15-20%).",
                "**Debt-to-Equity**: Measures the company's leverage. (Goal: < 1.0 for most sectors)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 The \"Screening\" Concept"
            },
            {
              "type": "paragraph",
              "text": "Using these ratios to filter out thousands of stocks and find the top 10 potential investments."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Go to **Screener.in** and look up **Reliance Industries**.",
                "Note down its P/E Ratio and compare it with its 5-year average P/E.",
                "Find a company with a **Debt-to-Equity** ratio of zero (Debt-free companies).",
                "Explain why a high ROE is better than a low ROE for a long-term investor."
              ]
            },
            {
              "type": "quiz",
              "question": "In Fundamental Analysis Ratios, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Fundamental Analysis Ratios.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Fundamental Analysis Ratios is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "financial-statements",
          "title": "Financial Statements",
          "description": "Master Financial Statements with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The Profit & Loss (P&L) Statement",
                "The Balance Sheet (Assets & Liabilities)",
                "The Cash Flow Statement",
                "Shareholding Patterns (Promoters, FII, DII)",
                "Reading an Annual Report"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Profit & Loss (P&L)"
            },
            {
              "type": "paragraph",
              "text": "This shows the company's revenue and expenses over a period."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Top Line**: Revenue/Sales.",
                "**Operating Profit (EBITDA)**: Profit before interest, tax, and depreciation.",
                "**Bottom Line**: Net Profit (PAT - Profit After Tax)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 The Balance Sheet"
            },
            {
              "type": "paragraph",
              "text": "**Formula**: `Assets = Liabilities + Equity`."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Assets**: What the company owns (Cash, Factories, Inventory).",
                "**Liabilities**: What the company owes (Loans, Bills)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Shareholding Pattern"
            },
            {
              "type": "paragraph",
              "text": "Who owns the company?"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Promoters**: The founders/owners. High promoter holding is usually a sign of confidence.",
                "**FII (Foreign Institutional Investors)**: Big global funds (The \"Smart Money\").",
                "**DII (Domestic Institutional Investors)**: Indian mutual funds and LIC.",
                "**Public**: Retail investors like you and me.",
                "Download the latest **Annual Report** of **HDFC Bank** (search for \"HDFC Bank Investor Relations\").",
                "Find the \"Consolidated Net Profit\" for the last 3 years. Is it growing?",
                "Check the **Promoter Holding** of **Adani Enterprises** on Screener.in.",
                "Why is the **Cash Flow from Operations** more important than Net Profit?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Financial Statements, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Financial Statements.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Financial Statements is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "technical-analysis-candlesticks",
          "title": "Technical Analysis Candlesticks",
          "description": "Master Technical Analysis Candlesticks with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "OHLC (Open, High, Low, Close)",
                "Bullish vs. Bearish Candlesticks",
                "Support and Resistance",
                "Trendlines (Uptrend, Downtrend, Sideways)",
                "Major Patterns: Hammer, Shooting Star, Doji, Engulfing"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 The Candlestick"
            },
            {
              "type": "paragraph",
              "text": "A candle tells a story of the battle between **Bulls** (Buyers) and **Bears** (Sellers)."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Body**: The range between Open and Close.",
                "**Wick (Shadow)**: The price action above and below the body."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Support & Resistance"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Support**: A price level where a downtrend tends to pause due to a concentration of demand (The \"Floor\").",
                "**Resistance**: A price level where an uptrend tends to pause due to a concentration of supply (The \"Ceiling\")."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Key Patterns"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Hammer**: Bullish reversal at the bottom of a downtrend.",
                "**Shooting Star**: Bearish reversal at the top of an uptrend.",
                "**Doji**: Sign of indecision in the market.",
                "Open **TradingView.com** and search for the **NIFTY** chart.",
                "Identify a clear **Support** level where the price has bounced back multiple times.",
                "Find a **Hammer** candle on a daily chart.",
                "Draw a **Trendline** connecting at least 3 higher lows in an uptrend."
              ]
            },
            {
              "type": "quiz",
              "question": "In Technical Analysis Candlesticks, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Technical Analysis Candlesticks."
              ],
              "answer": 3,
              "explanation": "Technical Analysis Candlesticks is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "indicators-and-oscillators",
          "title": "Indicators And Oscillators",
          "description": "Master Indicators And Oscillators with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Moving Averages (SMA & EMA)",
                "The Golden Cross and Death Cross",
                "RSI (Relative Strength Index)",
                "MACD (Moving Average Convergence Divergence)",
                "Volume Analysis"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Moving Averages"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**200 DMA (Daily Moving Average)**: The ultimate long-term trend indicator.",
                "**Golden Cross**: When the 50 DMA crosses above the 200 DMA (Highly Bullish).",
                "**Death Cross**: When the 50 DMA crosses below the 200 DMA (Highly Bearish)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 RSI (Relative Strength Index)"
            },
            {
              "type": "paragraph",
              "text": "Measures the speed and change of price movements."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Overbought (> 70)**: The stock has run too fast, expect a correction.",
                "**Oversold (< 30)**: The stock has fallen too much, expect a bounce."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Volume"
            },
            {
              "type": "paragraph",
              "text": "Volume confirms the trend. A price breakout with low volume is often a \"Trap.\" A price breakout with massive volume is a strong signal."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Add the **RSI** indicator to your chart. Find a stock that is currently **Oversold** (RSI < 30).",
                "Add a **200 EMA** to the chart of **Reliance**. Is the price above or below it?",
                "Find a stock where the **Volume** is increasing while the price is also increasing.",
                "What is the difference between a **Simple Moving Average (SMA)** and an **Exponential Moving Average (EMA)**?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Indicators And Oscillators, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Indicators And Oscillators.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Indicators And Oscillators is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "derivatives-futures",
          "title": "Derivatives Futures",
          "description": "Master Derivatives Futures with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What are Derivatives?",
                "Understanding Future Contracts",
                "Lot Sizes and Expiry",
                "Margin and Leverage (The double-edged sword)",
                "Long vs. Short Positions"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 What is a Future?"
            },
            {
              "type": "paragraph",
              "text": "A contract to buy or sell an asset at a predetermined price on a specified future date."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "paragraph",
              "text": "Imagine you are a **Farmer** growing Wheat. You are afraid the price will fall by harvest time. You find a **Baker** who is afraid the price will rise. You both agree on a price today for delivery in 3 months. You have just created a **Future Contract**."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Key Terms"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Lot Size**: You cannot buy 1 share in Futures. You must buy a \"Lot\" (e.g., NIFTY lot is 50 shares).",
                "**Expiry**: In India, F&O contracts expire on the **Last Thursday** of every month.",
                "**Margin**: You don't pay the full value. you pay a \"Security Deposit\" (Margin) of ~15-20%. This is **Leverage**."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Long vs. Short"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Going Long**: Buying a future because you expect the price to **Rise**.",
                "**Going Short**: Selling a future because you expect the price to **Fall**."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Find the current **Lot Size** for **NIFTY** and **BANKNIFTY**.",
                "If a stock is trading at ₹500 and the lot size is 1000, what is the total **Contract Value**?",
                "Calculate the profit/loss if you go Long on 1 lot of NIFTY at 19,000 and it moves to 19,200.",
                "Why is trading in Futures considered higher risk than trading in the \"Cash\" market?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Derivatives Futures, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Derivatives Futures.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Derivatives Futures is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "derivatives-options",
          "title": "Derivatives Options",
          "description": "Master Derivatives Options with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Call Options (CE) and Put Options (PE)",
                "Option Buyers vs. Option Sellers (Writers)",
                "Moneyness: ITM, ATM, and OTM",
                "Option Greeks: Delta, Theta (Time Decay), and Vega",
                "Intrinsic Value vs. Time Value"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Call and Put"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Call Option (CE)**: Gives you the right to **Buy**. You buy this if you are **Bullish**.",
                "**Put Option (PE)**: Gives you the right to **Sell**. You buy this if you are **Bearish**."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Moneyness (Using NIFTY at 19,000 as example)"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**ATM (At The Money)**: The 19,000 strike price.",
                "**ITM (In The Money)**: 18,900 CE (Price is already above it) or 19,100 PE.",
                "**OTM (Out of The Money)**: 19,100 CE (Hopeful thinking) or 18,900 PE."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 The Greeks (The Mechanics)"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Delta**: How much the option price moves for every ₹1 move in the index.",
                "**Theta (The Enemy of Buyers)**: How much value the option loses every day due to time passing.",
                "**Vega**: Sensitivity to market volatility (IV)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Look up an **Option Chain** for NIFTY on the NSE India website.",
                "Identify the **ATM Call** and **ATM Put** strike prices.",
                "Why does an OTM option become worthless on the day of **Expiry**?",
                "Research why **Option Selling** requires much more margin than **Option Buying**."
              ]
            },
            {
              "type": "quiz",
              "question": "In Derivatives Options, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Derivatives Options.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Derivatives Options is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "investment-strategies",
          "title": "Investment Strategies",
          "description": "Master Investment Strategies with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Value Investing (The Warren Buffett / Benjamin Graham way)",
                "Growth Investing",
                "Momentum Trading",
                "SIP (Systematic Investment Plan) and Lumpsum",
                "Portfolio Diversification and Asset Allocation"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Value vs. Growth"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Value Investing**: Buying \"Great companies at a fair price.\" Looking for undervalued stocks using P/E and Margin of Safety.",
                "**Growth Investing**: Buying companies that are expected to grow much faster than the average (e.g., Tech or EV sectors). You pay a premium for future potential."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Momentum Trading"
            },
            {
              "type": "paragraph",
              "text": "The trend is your friend.\" Buying stocks that are already in a strong uptrend and selling them when the trend shows signs of reversal. Uses Technical Analysis (RSI, Moving Averages)."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 Asset Allocation"
            },
            {
              "type": "paragraph",
              "text": "Don't put all your eggs in one basket."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Equity**: For growth.",
                "**Debt/Gold**: For stability.",
                "**Real Estate**: For diversification."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Define your own \"Circle of Competence.\" What industries do you understand best?",
                "Use a **SIP Calculator** to see how much ₹5000/month grows in 20 years at a 12% return.",
                "Research the **\"Dogs of the Dow\"** strategy and how it can be applied to the NIFTY 50.",
                "Explain why **Diversification** is called \"The only free lunch in finance.\""
              ]
            },
            {
              "type": "quiz",
              "question": "In Investment Strategies, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Investment Strategies."
              ],
              "answer": 3,
              "explanation": "Investment Strategies is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "risk-management-psychology",
          "title": "Risk Management Psychology",
          "description": "Master Risk Management Psychology with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Stop Loss (The Life Jacket)",
                "Position Sizing (How much to buy)",
                "Risk-Reward Ratio",
                "The Psychology of Fear and Greed",
                "Keeping a Trading Journal"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Risk Management Rules"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**The 1% Rule**: Never risk more than 1% of your total capital on a single trade.",
                "**Stop Loss**: Always have a price where you admit you are wrong and exit. Without a stop loss, you are gambling, not trading.",
                "**Risk-Reward**: Aim for at least 1:2. Risk ₹100 to make ₹200."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Trading Psychology"
            },
            {
              "type": "paragraph",
              "text": "The market is 20% strategy and 80% psychology."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Fear of Missing Out (FOMO)**: Buying when the price is at its peak.",
                "**Revenge Trading**: Trying to \"make back\" money lost in a previous trade by taking bigger risks.",
                "**Discipline**: Following your plan even when your emotions tell you otherwise."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Calculate your **Position Size**: If you have ₹1,00,000 capital and want to risk 1% (₹1,000), how many shares can you buy if your Stop Loss is ₹10 away?",
                "Research the **\"Sunk Cost Fallacy\"** and how it applies to holding \"Loser\" stocks.",
                "Create a template for a **Trading Journal** (Date, Stock, Entry, Exit, Reason, Emotion).",
                "Read about the **\"Black Swan Event\"** and how it affects the stock market."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Indian Stock Market Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Risk Management Psychology, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Risk Management Psychology.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Risk Management Psychology is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "mutual-funds-taxation",
          "title": "Mutual Funds Taxation",
          "description": "Master Mutual Funds Taxation with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Types of Mutual Funds (Equity, Debt, Hybrid)",
                "Direct vs. Regular Plans",
                "Index Funds and ETFs",
                "STCG and LTCG (Taxation on Stocks)",
                "F&O Taxation (Business Income)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 Types of Mutual Funds"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Equity Funds**: Invest in stocks. (High Risk/High Return).",
                "**Debt Funds**: Invest in government bonds and corporate FD. (Low Risk/Stable).",
                "**Hybrid Funds**: A mix of both.",
                "**ELSS (Equity Linked Savings Scheme)**: Tax-saving funds with a 3-year lock-in (Under Section 80C)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Direct vs. Regular"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Regular Plan**: You pay a commission to an agent (Hidden expense).",
                "**Direct Plan**: You buy directly from the AMC. Over 20 years, this can save you **lakhs of rupees** in commissions."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.3 Taxation in India (The \"Tax Man\")"
            },
            {
              "type": "table",
              "headers": [
                "Asset Type",
                "STCG (Hold < 1yr)",
                "LTCG (Hold > 1yr)"
              ],
              "rows": [
                [
                  "**Stocks/Equity MF**",
                  "15%",
                  "10% (Exempt up to ₹1 Lakh)",
                  ""
                ],
                [
                  "**F&O Trading**",
                  "Treated as Business Income (Taxed as per your Slab)",
                  "N/A",
                  ""
                ]
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Calculate the difference in returns between a 1% expense ratio (Regular) and 0.1% (Direct) over 20 years.",
                "What is an **ETF (Exchange Traded Fund)** and how is it different from a Mutual Fund?",
                "Research the tax benefits of **Section 80C** and how much you can save via ELSS.",
                "If you make a profit of ₹2,00,000 in stocks after 2 years, how much tax will you pay?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Mutual Funds Taxation, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Mutual Funds Taxation.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Mutual Funds Taxation is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "macroeconomics-global-markets",
          "title": "Macroeconomics Global Markets",
          "description": "Master Macroeconomics Global Markets with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "RBI Monetary Policy (Repo Rate)",
                "Inflation (CPI) and GDP",
                "The role of USDINR (Currency effects)",
                "FII flows and Global Sentiments",
                "US Markets (Dow Jones, Nasdaq, S&P 500)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 The RBI Repo Rate"
            },
            {
              "type": "paragraph",
              "text": "**Repo Rate**: The rate at which the RBI lends money to banks."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Rate Hike**: Loans become expensive → Spend less → Market usually falls.",
                "**Rate Cut**: Loans become cheap → Spend more → Market usually rises."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 Currency & Imports"
            },
            {
              "type": "paragraph",
              "text": "India imports most of its **Crude Oil**."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "If **USDINR** rises (Rupee weakens), oil becomes expensive → Inflation rises → Market sentiment turns negative.",
                "If **Crude Oil** prices fall, it’s a big \"Bonus\" for the Indian economy."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.3 The \"US Connection\""
            },
            {
              "type": "paragraph",
              "text": "The Indian market often opens based on how the US markets performed the previous night."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**GIFT NIFTY**: A precursor to the NSE opening, traded in GIFT City (formerly SGX Nifty)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Find the current **Repo Rate** set by the RBI.",
                "Check the correlation between **Crude Oil prices** and the **NIFTY Auto index**.",
                "Why does the Indian market fall when the **US Fed** increases interest rates?",
                "Look up the **VIX (Volatility Index)**. What does a high VIX value tell you about market fear?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Macroeconomics Global Markets, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Macroeconomics Global Markets.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Macroeconomics Global Markets is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "algo-trading-api-integration",
          "title": "Algo Trading API Integration",
          "description": "Master Algo Trading API Integration with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Algo-Trading?",
                "Python for Finance (`pandas_ta`, `yfinance`)",
                "Introduction to Broker APIs (Kite Connect, SmartAPI)",
                "Backtesting a Strategy",
                "Risk of Automation (Technical glitches)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 Why Algo-Trading?"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Emotionless**: Computers don't feel fear or greed.",
                "**Speed**: Execute trades in milliseconds.",
                "**Accuracy**: No human errors in calculation."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Tools & Libraries"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**yfinance**: To get historical data for free.",
                "**pandas_ta**: To calculate technical indicators (RSI, Moving Averages) in one line of code.",
                "**Kite Connect (Zerodha)**: The gold standard for retail trading APIs in India."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.3 Backtesting Example (Logic)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Pseudo-code for a Moving Average Crossover strategy\nif current_price > 50_day_ema:\n    if 50_day_ema > 200_day_ema:\n        place_order(\"BUY\", symbol=\"NIFTY\", qty=50)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install the `yfinance` library and fetch the last 1 year of data for **RELIANCE.NS**.",
                "Calculate a **9-day EMA** and **21-day EMA** using Python.",
                "Write a Python script that prints \"BUY\" if the RSI is less than 30.",
                "Research the difference between **Backtesting** and **Paper Trading**."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You have reached the Absolute Mastery level of the Indian Stock Market!"
            },
            {
              "type": "quiz",
              "question": "In Algo Trading API Integration, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Algo Trading API Integration."
              ],
              "answer": 3,
              "explanation": "Algo Trading API Integration is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "intraday-trading-strategies",
          "title": "Intraday Trading Strategies",
          "description": "Master Intraday Trading Strategies with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The Intraday Mindset",
                "VWAP (Volume Weighted Average Price)",
                "OHOL (Open High Open Low) Strategy",
                "Pivot Points and Central Pivot Range (CPR)",
                "Time Frames for Intraday (5-min, 15-min)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 The VWAP Indicator"
            },
            {
              "type": "paragraph",
              "text": "**VWAP** is the single most important indicator for intraday traders. It represents the average price at which a stock has traded throughout the day, based on both volume and price."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Above VWAP**: Bullish sentiment.",
                "**Below VWAP**: Bearish sentiment.",
                "**Mean Reversion**: Prices often return to the VWAP if they stray too far."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 OHOL Strategy (Open = High or Open = Low)"
            },
            {
              "type": "paragraph",
              "text": "A very popular strategy for the first 15 minutes of the Indian market."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Open = Low**: If a stock opens and doesn't go below its opening price, it shows massive buying pressure. (Potential BUY).",
                "**Open = High**: If a stock opens and doesn't go above its opening price, it shows massive selling pressure. (Potential SELL)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.3 Pivot Points & CPR"
            },
            {
              "type": "paragraph",
              "text": "Pivot points are calculated based on the previous day's High, Low, and Close. They act as automatic Support and Resistance levels for the current day."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "On a 5-minute chart of NIFTY, add the **VWAP** indicator. Observe how the price reacts when it touches the VWAP line.",
                "Check the \"Top Gainers\" today at 9:30 AM. Did any of them have **Open = Low**?",
                "Research the **\"Opening Range Breakout\" (ORB)** strategy.",
                "Why is the **15-minute time frame** preferred by many professional intraday traders over the 1-minute frame?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Intraday Trading Strategies, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Intraday Trading Strategies.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Intraday Trading Strategies is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "swing-positional-trading",
          "title": "Swing Positional Trading",
          "description": "Master Swing Positional Trading with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Swing Trading?",
                "Using Daily and Weekly Timeframes",
                "The \"Box Pattern\" (Darvas Box)",
                "Multi-bagger Mindset",
                "Pyramiding (Adding to winning positions)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 The Swing Mindset"
            },
            {
              "type": "paragraph",
              "text": "Swing trading aims to capture a \"Swing\" in the market that lasts for a few days to a few weeks. It is less stressful than intraday trading and works well for people with day jobs."
            },
            {
              "type": "paragraph",
              "text": "**Key Rule**: Trade with the trend. If the Weekly chart is bullish, look for buy setups on the Daily chart."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 The Darvas Box"
            },
            {
              "type": "paragraph",
              "text": "A method of identifying stocks that are moving from one \"Price Box\" to a higher one."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Breakout**: When the price stays above the top of the box for 3 days.",
                "**Stop Loss**: The bottom of the box."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 Pyramiding"
            },
            {
              "type": "paragraph",
              "text": "Instead of buying everything at once, you buy in stages."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Buy 25% on the initial breakout.",
                "Buy another 25% once the stock moves 5% in your favor.",
                "This ensures you are \"heavy\" in your winners and \"light\" in your losers."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Find a stock that has been in a **Sideways Box** for more than 3 months.",
                "Change your chart to a **Weekly Timeframe**. Find a stock that has just crossed its 52-week high.",
                "Research the **\"CANSLIM\"** method of growth investing/trading.",
                "Why is a **Trailing Stop Loss** essential for swing trading?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Swing Positional Trading, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Swing Positional Trading.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Swing Positional Trading is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "scalping-techniques",
          "title": "Scalping Techniques",
          "description": "Master Scalping Techniques with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Scalping?",
                "The 1-minute and 3-minute Timeframes",
                "Scalping using Bollinger Bands",
                "Scalping using EMA Crossovers (9/21)",
                "The importance of Low Brokerage"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 What is Scalping?"
            },
            {
              "type": "paragraph",
              "text": "Scalping is a trading style that specializes in profiting off small price changes. You take dozens of trades a day, aiming for small \"bits\" of profit each time."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Investing** is like planting a tree and waiting for years.",
                "**Scalping** is like picking up 10 paise coins off the floor all day long. If you do it 1000 times, you have ₹100."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 Bollinger Bands for Scalpers"
            },
            {
              "type": "paragraph",
              "text": "Bollinger Bands consist of a middle line (SMA) and two outer bands (Standard Deviations)."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**The Squeeze**: When bands get tight, a big move is coming.",
                "**The Walk**: When price hugs the upper band in a strong uptrend."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.3 The Danger of Slippage"
            },
            {
              "type": "paragraph",
              "text": "In scalping, even 1 rupee matters."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Slippage**: The difference between the price you want and the price you get.",
                "**Brokerage**: If you take 50 trades a day, your brokerage could eat all your profits. Discount brokers are a must."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Observe a **1-minute chart** of BANKNIFTY during market opening (9:15 AM). Notice how fast the price moves.",
                "Add **Bollinger Bands** to your chart. Find a moment where the price \"pierced\" the upper band and then reversed.",
                "Calculate the total brokerage for 20 trades (Buy + Sell) using a **Brokerage Calculator**.",
                "Why is **discipline** more important in scalping than any other style?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Scalping Techniques, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Scalping Techniques.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Scalping Techniques is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "advanced-chart-patterns",
          "title": "Advanced Chart Patterns",
          "description": "Master Advanced Chart Patterns with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Head and Shoulders (Reversal)",
                "Cup and Handle (Continuation)",
                "Double Top and Double Bottom",
                "Ascending, Descending, and Symmetrical Triangles",
                "Flag and Pennant Patterns"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 Double Top & Double Bottom"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Double Top (M Pattern)**: The price tries to break a resistance level twice, fails, and falls. (Bearish Reversal).",
                "**Double Bottom (W Pattern)**: The price tries to break a support level twice, fails, and rises. (Bullish Reversal)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 Head and Shoulders"
            },
            {
              "type": "paragraph",
              "text": "One of the most reliable reversal patterns in technical analysis."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Consists of a Left Shoulder, a Head (higher peak), and a Right Shoulder.",
                "**The Neckline**: The support level. If broken, the price usually crashes."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.3 Cup and Handle"
            },
            {
              "type": "paragraph",
              "text": "A bullish continuation pattern that looks like a tea cup."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The \"Cup\" shows a rounding bottom (accumulation).",
                "The \"Handle\" shows a small consolidation before the final breakout."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Find a **Double Bottom (W Pattern)** on a daily chart. Measure the target (The height of the W).",
                "Look for a **Head and Shoulders** pattern on the NIFTY chart from any historical period.",
                "Draw a **Symmetrical Triangle** on a consolidating stock. Which way did it break out?",
                "Research the **\"False Breakout\"** and why patterns sometimes fail."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Trading Mastery track!"
            },
            {
              "type": "quiz",
              "question": "In Advanced Chart Patterns, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Advanced Chart Patterns."
              ],
              "answer": 3,
              "explanation": "Advanced Chart Patterns is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
