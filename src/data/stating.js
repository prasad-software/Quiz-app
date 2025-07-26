export const stating = {
  "javascript": [
    {
      "question": "What is a closure in JavaScript?",
      "options": [
        "A function having access to the parent scope, even after the parent function has closed",
        "An object that closes over variables",
        "A function that returns another function",
        "A self-invoking function"
      ],
      "answer": "A function having access to the parent scope, even after the parent function has closed"
    },
    {
      "question": "Which of the following is not a primitive data type in JavaScript?",
      "options": ["String", "Number", "Object", "Boolean"],
      "answer": "Object"
    },
    {
      "question": "What will be the output of `console.log(typeof null);`?",
      "options": ["\"null\"", "\"object\"", "\"undefined\"", "\"function\""],
      "answer": "\"object\""
    },
    {
      "question": "Which method is used to parse a JSON string into a JavaScript object?",
      "options": ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"],
      "answer": "JSON.parse()"
    },
    {
      "question": "What is the purpose of the `bind()` method in JavaScript?",
      "options": [
        "To bind an object to a function",
        "To create a new function with a specific `this` value",
        "To prevent a function from being called",
        "To bind two functions together"
      ],
      "answer": "To create a new function with a specific `this` value"
    }
  ],
  "reactjs": [
    {
      "question": "What is the purpose of the `useEffect` hook in React?",
      "options": [
        "To manage state in functional components",
        "To perform side effects in functional components",
        "To create context in React",
        "To handle events in React"
      ],
      "answer": "To perform side effects in functional components"
    },
    {
      "question": "Which of the following is true about React keys?",
      "options": [
        "Keys are used to identify which items have changed, are added, or are removed",
        "Keys should be unique among siblings",
        "Using indexes as keys can lead to issues",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "What is the virtual DOM in React?",
      "options": [
        "A copy of the real DOM that React uses to optimize updates",
        "A virtual representation of the browser's DOM",
        "A separate DOM used for testing purposes",
        "None of the above"
      ],
      "answer": "A copy of the real DOM that React uses to optimize updates"
    },
    {
      "question": "How can you prevent a component from re-rendering in React?",
      "options": [
        "By using `shouldComponentUpdate` in class components",
        "By using `React.memo` for functional components",
        "By not updating the component's state or props",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "What is the purpose of the `useContext` hook in React?",
      "options": [
        "To manage local component state",
        "To access context values in functional components",
        "To create a new context",
        "To replace Redux"
      ],
      "answer": "To access context values in functional components"
    }
  ],
  "genai": [
    {
      "question": "What is Generative AI primarily used for?",
      "options": [
        "Data analysis",
        "Generating new content such as text, images, or music",
        "Predictive modeling",
        "Data cleaning"
      ],
      "answer": "Generating new content such as text, images, or music"
    },
    {
      "question": "Which of the following is a popular Generative AI model for text generation?",
      "options": ["BERT", "GPT", "ResNet", "VGG"],
      "answer": "GPT"
    },
    {
      "question": "What does GAN stand for in the context of Generative AI?",
      "options": [
        "General Adversarial Network",
        "Generative Adversarial Network",
        "Generative Artificial Network",
        "General Artificial Network"
      ],
      "answer": "Generative Adversarial Network"
    },
    {
      "question": "In a GAN, what is the role of the discriminator?",
      "options": [
        "To generate new data",
        "To distinguish between real and generated data",
        "To train the generator",
        "To optimize the loss function"
      ],
      "answer": "To distinguish between real and generated data"
    },
    {
      "question": "Which of the following is a challenge in training GANs?",
      "options": ["Mode collapse", "Overfitting", "Underfitting", "High bias"],
      "answer": "Mode collapse"
    }
  ],
  "nextjs": [
    {
      "question": "What is the default behavior of Next.js pages?",
      "options": [
        "Client-side rendering",
        "Server-side rendering",
        "Static site generation",
        "None of the above"
      ],
      "answer": "Server-side rendering"
    },
    {
      "question": "Which file is used to customize the HTML document structure in Next.js?",
      "options": ["_app.js", "_document.js", "index.js", "main.js"],
      "answer": "_document.js"
    },
    {
      "question": "How can you create dynamic routes in Next.js?",
      "options": [
        "Using query parameters",
        "By creating files with square brackets in the `pages` directory",
        "By using the `useRouter` hook",
        "By configuring the router manually"
      ],
      "answer": "By creating files with square brackets in the `pages` directory"
    },
    {
      "question": "What is the purpose of `getStaticProps` in Next.js?",
      "options": [
        "To fetch data at request time",
        "To fetch data at build time",
        "To fetch data on the client side",
        "To fetch data during server-side rendering"
      ],
      "answer": "To fetch data at build time"
    },
    {
      "question": "Which of the following is true about API routes in Next.js?",
      "options": [
        "They allow you to create RESTful endpoints",
        "They are stored in the `pages/api` directory",
        "They can be used to handle form submissions",
        "All of the above"
      ],
      "answer": "All of the above"
    }
  ]
}
