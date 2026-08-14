import type { Tutorial } from '../types'

export const webFundamentals: Tutorial = {
  slug: 'web-fundamentals',
  title: 'How the Web Works: From URL to Pixels',
  shortTitle: 'Web Fundamentals',
  description:
    'What actually happens between typing an address and seeing a page. No prior knowledge assumed — every term defined, every step traced.',
  category: 'Web Development',
  difficulty: 'beginner',
  icon: 'code',
  tags: ['Web', 'HTTP', 'Browsers', 'Foundations'],
  color: '#0d9488',
  updated: '2026-08-15',
  prerequisites: [
    'Nothing. If you have used a web browser, you have everything you need.',
  ],
  outcomes: [
    'Trace what happens between typing a URL and seeing a rendered page',
    'Explain what a request and a response actually contain',
    'Read a status code and know what it tells you',
    'Describe the difference between the client and the server, precisely',
  ],
  chapters: [
    {
      title: 'Chapter 1 — The Journey of a Request',
      lessons: [
        {
          slug: 'what-happens-when-you-visit-a-page',
          title: 'What Happens When You Visit a Page',
          description:
            'Follow a single request from your keyboard to the screen, one step at a time.',
          duration: 11,
          blocks: [
            {
              type: 'callout',
              kind: 'info',
              title: 'Before we begin',
              text: 'This course assumes you have never written a line of code. Every technical word is defined the first time it appears. If a term feels unexplained, that is a bug in the writing, not a gap in you.',
            },
            {
              type: 'paragraph',
              text: 'You type an address, press Enter, and a page appears. It feels instant and simple. Underneath, a surprisingly long sequence of steps just happened — and understanding that sequence is the foundation for everything else about the web.',
            },
            {
              type: 'definition',
              term: 'URL',
              plain:
                'The address you type. It names three things: how to connect, which computer to ask, and what to ask that computer for.',
              formal:
                'Uniform Resource Locator. `https://example.com/about` breaks into scheme (`https`), host (`example.com`), and path (`/about`).',
            },
            {
              type: 'analogy',
              title: 'Posting a letter',
              text: 'A URL is an address on an envelope. The scheme is how it travels — recorded delivery or ordinary post. The host is the building. The path is the room inside that building. Your browser writes the envelope; the network delivers it; something at the other end decides what to send back.',
            },
            { type: 'heading', level: 2, text: 'The five steps' },
            {
              type: 'steps',
              items: [
                {
                  title: '1. Find the address',
                  text: 'Computers do not use names like example.com — they use numbers called IP addresses. Your browser first asks a directory service, DNS, to translate the name into a number.',
                },
                {
                  title: '2. Open a connection',
                  text: 'Your browser opens a channel to that number. With https, both sides also agree on encryption first, so nobody in between can read what follows.',
                },
                {
                  title: '3. Send a request',
                  text: 'Your browser sends a short block of text saying what it wants: the method (usually GET, meaning "give me"), the path, and details about itself.',
                },
                {
                  title: '4. Receive a response',
                  text: 'The server sends back a status code saying how it went, some headers describing the content, and then the content itself — usually HTML.',
                },
                {
                  title: '5. Render the page',
                  text: 'Your browser reads the HTML, discovers it needs more files (styles, images, scripts), fetches each of those the same way, and paints the result.',
                },
              ],
            },
            {
              type: 'callout',
              kind: 'tip',
              title: 'Step 5 repeats a lot',
              text: 'A single page visit is rarely one request. A typical page triggers dozens — one per image, stylesheet, font, and script. That is why pages appear progressively rather than all at once.',
            },
            { type: 'heading', level: 2, text: 'Client and server' },
            {
              type: 'definition',
              term: 'Client',
              plain:
                'Whatever asks for something. Your browser is a client. So is a phone app fetching data.',
            },
            {
              type: 'definition',
              term: 'Server',
              plain:
                'Whatever answers. It is just a computer running a program that waits for requests and replies to them. "Server" describes the role, not special hardware.',
            },
            {
              type: 'paragraph',
              text: 'The distinction matters because it tells you **where** things run, and therefore what each side can and cannot know. Your browser cannot read the server’s database directly. The server cannot see what is on your screen. Everything they share, they share by sending it explicitly.',
            },
            { type: 'heading', level: 2, text: 'Status codes' },
            {
              type: 'paragraph',
              text: 'Every response opens with a three-digit number. You only need the first digit to know roughly what happened.',
            },
            {
              type: 'table',
              headers: ['Range', 'Meaning', 'Common example'],
              rows: [
                ['2xx', 'It worked', '200 OK'],
                ['3xx', 'It moved — look elsewhere', '301 Moved Permanently'],
                ['4xx', 'You asked for something wrong', '404 Not Found'],
                ['5xx', 'The server broke', '500 Internal Server Error'],
              ],
            },
            {
              type: 'callout',
              kind: 'warning',
              title: 'The 4xx / 5xx distinction is worth internalising',
              text: '4xx means the problem is in the request — a wrong address, missing permission. 5xx means the request was fine but the server failed to handle it. When something breaks, this one digit tells you which side to investigate.',
            },
            {
              type: 'exercise',
              prompt:
                'Open any website, then open your browser’s developer tools (F12 on most browsers) and look at the Network tab. Reload the page. How many requests were made for that single page visit? Find one that is not HTML and identify what it is.',
              hint: 'The first request is usually the HTML document itself. Everything after it was discovered by reading that HTML.',
              solution:
                'Most real pages make between 20 and 100 requests. The first is the HTML document; the rest are things the browser found while reading it — CSS stylesheets, JavaScript files, images, fonts, and often analytics or advertising requests.\n\nThe useful realisation is that the browser could not have known about any of them in advance. It had to fetch and read the HTML first, then discover what else was needed. That is why the order of things in an HTML file affects how quickly a page appears.',
            },
            {
              type: 'keyPoints',
              points: [
                'A URL names how to connect, which computer to ask, and what to ask for.',
                'A page visit is: resolve the name, open a connection, request, respond, render.',
                'Client and server describe roles, not hardware — either is just a program.',
                'They share only what they explicitly send each other.',
                'A status code’s first digit tells you which side went wrong.',
              ],
            },
            {
              type: 'quiz',
              question:
                'A page returns 404. Which side is the problem most likely on, and why?',
              options: [
                'The server — 4xx always indicates a server fault',
                'Neither; 404 means the connection failed',
                'The request — 4xx means something about what was asked for was wrong, such as the path not existing',
                'Both equally; the code does not distinguish',
              ],
              answer: 2,
              explanation:
                '4xx codes point at the request. A 404 specifically means the server understood you fine but has nothing at that path — usually a mistyped or outdated URL. A server fault would be a 5xx. Note that the connection clearly succeeded, otherwise no status code could have come back at all.',
            },
          ],
        },
      ],
    },
  ],
}
