import { CheatSheet, ChatMessage } from '../../types';

export const aiCheatSheets: CheatSheet[] = [
  {
    id: 'ai-1',
    category: 'AI',
    subCategory: 'svg',
    title: 'AI, ML, DL, NLP Relationship',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
      .label { font-size: 16px; font-weight: bold; text-anchor: middle; }
      .ai-circle { fill: #3b82f6; opacity: 0.5; }
      .ml-circle { fill: #8b5cf6; opacity: 0.6; }
      .dl-circle { fill: #ec4899; opacity: 0.7; }
      .nlp-circle { fill: #10b981; opacity: 0.5; stroke: #a7f3d0; stroke-width: 2; }
      .ai-text, .ml-text, .dl-text, .nlp-text { fill: #e0f2fe; }
    </style>
    
    <g id="main-venn">
      <circle cx="180" cy="125" r="100" class="ai-circle"/>
      <text x="180" y="120" class="label ai-text">Artificial Intelligence</text>
      
      <circle cx="180" cy="125" r="70" class="ml-circle"/>
      <text x="180" y="160" class="label ml-text">Machine Learning</text>
      
      <circle cx="180" cy="125" r="40" class="dl-circle"/>
      <text x="180" y="90" class="label dl-text">Deep Learning</text>
    </g>
    
    <g id="nlp-circle">
      <circle cx="300" cy="125" r="60" class="nlp-circle" />
      <text x="300" y="120" class="label nlp-text">NLP</text>
      <text x="300" y="140" class="label nlp-text" font-size="10">(Natural Language</text>
      <text x="300" y="152" class="label nlp-text" font-size="10">Processing)</text>
    </g>
</svg>`,
    description: 'A Venn diagram showing the relationship between AI concepts. AI is the broad field. Machine Learning (ML) is a subset of AI. Deep Learning (DL) is a subset of ML. Natural Language Processing (NLP) is a field of AI that intersects with all of these.',
    tags: ['ai', 'ml', 'dl', 'nlp', 'diagram', 'concepts', 'svg'],
  },
  {
    id: 'ai-6',
    category: 'AI',
    subCategory: 'text',
    title: 'AI Agents Explained',
    type: 'code',
    snippet: 'AI Agent: An autonomous system that perceives its environment, makes decisions, and takes actions to achieve specific goals.',
    description: 'Modern AI agents, often powered by LLMs, can perform complex, multi-step tasks. They can use tools (like APIs or code interpreters), reason about a problem, create a plan, and execute it. The core components are a reasoning engine (LLM), memory, and a set of tools.',
    tags: ['ai', 'agents', 'llm', 'autonomous', 'reasoning', 'tools'],
  },
  {
    id: 'ai-19',
    category: 'AI',
    subCategory: 'svg',
    title: 'Activation Functions',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 200" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
      .title { font-size: 13px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
      .axis { stroke: #475569; }
      .grid { stroke: #334155; stroke-dasharray: 2, 2; }
      .label { font-size: 10px; fill: #94a3b8; }
      .plot-line { stroke-width: 2.5; fill: none; }
    </style>

    <!-- Sigmoid -->
    <g transform="translate(60, 30)">
      <text x="75" y="0" class="title">Sigmoid</text>
      <line x1="0" y1="75" x2="150" y2="75" class="axis"/><line x1="75" y1="0" x2="75" y2="150" class="axis"/>
      <line x1="0" y1="5" x2="150" y2="5" class="grid"/><text x="70" y="10" class="label" text-anchor="end">1</text>
      <line x1="0" y1="145" x2="150" y2="145" class="grid"/><text x="70" y="150" class="label" text-anchor="end">0</text>
      <path d="M 0 144 C 50 144, 50 6, 75 6 S 100 144, 150 144" transform="translate(0, 1) scale(1, 0.95)" class="plot-line" stroke="#60a5fa"/>
    </g>
    
    <!-- ReLU -->
    <g transform="translate(250, 30)">
      <text x="75" y="0" class="title">ReLU</text>
      <line x1="0" y1="75" x2="150" y2="75" class="axis"/><line x1="75" y1="0" x2="75" y2="150" class="axis"/>
      <line x1="75" y1="145" x2="150" y2="145" class="grid"/><text x="70" y="150" class="label" text-anchor="end">0</text>
      <polyline points="0,145 75,145 150,5" class="plot-line" stroke="#34d399"/>
    </g>

     <!-- Tanh -->
     <g transform="translate(440, 30)">
       <text x="50" y="0" class="title">Tanh</text>
       <line x1="-25" y1="75" x2="125" y2="75" class="axis"/><line x1="50" y1="0" x2="50" y2="150" class="axis"/>
       <line x1="-25" y1="5" x2="125" y2="5" class="grid"/><text x="45" y="10" class="label" text-anchor="end">1</text>
       <line x1="-25" y1="145" x2="125" y2="145" class="grid"/><text x="45" y="150" class="label" text-anchor="end">-1</text>
       <path d="M -25 145 C 25 145, 25 5, 50 5 S 75 145, 125 145" class="plot-line" stroke="#f59e0b"/>
     </g>
</svg>`,
    description: 'In a neural network, the activation function introduces non-linearity. Sigmoid squashes values to (0, 1). ReLU outputs max(0, x). Tanh squashes values to (-1, 1).',
    tags: ['ai', 'dl', 'neural network', 'activation function', 'relu', 'sigmoid', 'tanh', 'svg'],
  },
  {
    id: 'ai-3',
    category: 'AI',
    subCategory: 'text',
    title: 'Embeddings Explained',
    type: 'code',
    snippet: 'Embedding: A numerical vector representation of text, images, or other data, where semantically similar items have similar vectors.',
    description: 'Embeddings are crucial for ML models as they convert high-dimensional, sparse data (like words) into a dense, lower-dimensional space. This allows models to understand relationships and context. For example, the vectors for "king" and "queen" would be closer than "king" and "apple".',
    tags: ['ai', 'embeddings', 'vector', 'nlp', 'representation'],
  },
  {
    id: 'ai-20',
    category: 'AI',
    subCategory: 'chat',
    title: 'Example Chat Conversation',
    type: 'chat',
    snippet: [
        { author: 'user', content: 'What is the difference between a vector database and a traditional relational database?' },
        { author: 'model', content: 'A traditional relational database (like PostgreSQL) stores data in structured tables with rows and columns, optimized for transactional queries and joins. A vector database is designed to store and query high-dimensional vector embeddings, optimized for similarity search (finding the "closest" items) which is common in AI applications.' }
    ] as ChatMessage[],
    description: 'An example of a user-model interaction, demonstrating how a chat might be displayed. This format is useful for showing conversational examples or Q&A.',
    tags: ['ai', 'chat', 'conversation', 'example', 'vector database'],
  },
  {
    id: 'ai-18',
    category: 'AI',
    subCategory: 'text',
    title: 'Fine-Tuning a Model',
    type: 'code',
    snippet: 'Fine-Tuning: The process of taking a pre-trained model and further training it on a smaller, specific dataset to adapt it to a new task.',
    description: 'Instead of training a large model from scratch, it\'s often more effective to fine-tune an existing one. This leverages the general knowledge learned by the pre-trained model and specializes it for your particular use case, saving significant time and resources.',
    tags: ['ai', 'fine-tuning', 'transfer learning', 'llm', 'pre-trained', 'nlp'],
  },
  {
    id: 'ai-15',
    category: 'AI',
    subCategory: 'python',
    title: 'Hugging Face: Using a Pipeline',
    type: 'code',
    snippet: 'from transformers import pipeline\n\n# Create a sentiment analysis pipeline\nclassifier = pipeline(\'sentiment-analysis\')\n\n# Use the pipeline to classify text\nresult = classifier(\'I love using the Hugging Face library!\')\n\nprint(result) # [{\'label\': \'POSITIVE\', \'score\': 0.99...}]',
    description: 'The Hugging Face Transformers library simplifies using pre-trained models for various NLP tasks. The `pipeline` function is the easiest way to use a model for inference on a specific task like sentiment analysis or translation.',
    tags: ['ai', 'hugging face', 'transformers', 'nlp', 'pipeline', 'pre-trained'],
  },
  {
    id: 'ai-2',
    category: 'AI',
    subCategory: 'text',
    title: 'LLM and RAG Abbreviations',
    type: 'code',
    snippet: 'LLM: Large Language Model\nRAG: Retrieval-Augmented Generation',
    description: 'LLMs (e.g., GPT, Gemini) are deep learning models with billions of parameters, trained on vast text data. RAG is a technique that enhances LLM responses by first retrieving relevant information from an external knowledge base and providing it as context.',
    tags: ['ai', 'llm', 'rag', 'language model', 'generation', 'architecture'],
  },
  {
    id: 'ai-7',
    category: 'AI',
    subCategory: 'text',
    title: 'Model Context Explained',
    type: 'code',
    snippet: 'Context / Context Window: The amount of text (input + output) a language model can process at one time.',
    description: 'The context window is a key limitation of LLMs, measured in tokens. All information provided in a prompt (instructions, examples, retrieved documents) must fit within this window. If the context is exceeded, the model loses information from the beginning of the conversation. Providing good, relevant context is the core of effective prompting.',
    tags: ['ai', 'llm', 'context', 'context window', 'prompting', 'tokens'],
  },
  {
    id: 'ai-8',
    category: 'AI',
    subCategory: 'python',
    title: 'NumPy: N-dimensional Arrays',
    type: 'code',
    snippet: 'import numpy as np\n\n# Create a 1D array from a list\na = np.array([1, 2, 3])\n\n# Create a 2D array (matrix)\nb = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Perform element-wise operations\nc = a + 5 // [6, 7, 8]\n\nprint(b.shape) // (2, 3)',
    description: 'NumPy is a fundamental library for scientific computing in Python. Its core feature is the powerful N-dimensional array object, which allows for efficient mathematical operations on large datasets.',
    tags: ['ai', 'python', 'numpy', 'arrays', 'data science', 'library'],
  },
  {
    id: 'ai-17',
    category: 'AI',
    subCategory: 'svg',
    title: 'Overfitting and Underfitting',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 220" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
      .title { font-size: 13px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
      .point { fill: #60a5fa; }
      .line { stroke-width: 2.5; fill: none; }
      .underfit-line { stroke: #f87171; }
      .goodfit-line { stroke: #34d399; }
      .overfit-line { stroke: #f59e0b; }
    </style>
    <defs>
      <g id="data-points">
        <circle cx="10" cy="70" r="3" class="point"/> <circle cx="20" cy="60" r="3" class="point"/> <circle cx="30" cy="55" r="3" class="point"/>
        <circle cx="40" cy="45" r="3" class="point"/> <circle cx="50" cy="50" r="3" class="point"/> <circle cx="60" cy="30" r="3" class="point"/>
        <circle cx="70" cy="40" r="3" class="point"/> <circle cx="80" cy="20" r="3" class="point"/> <circle cx="90" cy="25" r="3" class="point"/>
        <circle cx="100" cy="10" r="3" class="point"/> <circle cx="110" cy="15" r="3" class="point"/> <circle cx="120" cy="35" r="3" class="point"/>
      </g>
    </defs>

    <!-- Underfitting -->
    <g transform="translate(30, 40)">
      <text x="65" y="-10" class="title">Underfitting</text>
      <use href="#data-points"/>
      <line x1="0" y1="60" x2="130" y2="20" class="line underfit-line"/>
    </g>

    <!-- Good Fit -->
    <g transform="translate(210, 40)">
      <text x="65" y="-10" class="title">Good Fit</text>
      <use href="#data-points"/>
      <path d="M 0 75 Q 65 -10, 130 40" class="line goodfit-line"/>
    </g>

    <!-- Overfitting -->
    <g transform="translate(390, 40)">
      <text x="65" y="-10" class="title">Overfitting</text>
      <use href="#data-points"/>
      <path d="M 10 70 C 15 65, 18 62, 20 60 S 25 57, 30 55 C 35 53, 38 47, 40 45 S 45 48, 50 50 C 55 52, 58 32, 60 30 S 65 38, 70 40 C 75 42, 78 22, 80 20 S 85 23, 90 25 C 95 27, 98 12, 100 10 S 105 13, 110 15 S 115 33, 120 35" class="line overfit-line"/>
    </g>
</svg>`,
    description: 'A visual guide to model fitting. Underfitting fails to capture the data trend. A good fit follows the trend smoothly. Overfitting learns the training data and its noise too precisely, leading to poor performance on new data.',
    tags: ['ai', 'ml', 'overfitting', 'underfitting', 'model tuning', 'concepts', 'svg'],
  },
  {
    id: 'ai-9',
    category: 'AI',
    subCategory: 'python',
    title: 'Pandas: DataFrame Basics',
    type: 'code',
    snippet: 'import pandas as pd\n\ndata = {\'Name\': [\'Alice\', \'Bob\', \'Charlie\'],\n        \'Age\': [25, 30, 35]}\n\ndf = pd.DataFrame(data)\n\n# Select a column\nages = df[\'Age\']\n\n# Add a new column\ndf[\'City\'] = [\'New York\', \'Paris\', \'London\']\n\nprint(df.head())',
    description: 'Pandas is the primary library for data manipulation and analysis in Python. The DataFrame is its main data structure, representing a 2D labeled table with columns of potentially different types.',
    tags: ['ai', 'python', 'pandas', 'dataframe', 'data analysis', 'library'],
  },
  {
    id: 'ai-13',
    category: 'AI',
    subCategory: 'python',
    title: 'PyTorch: Basic Neural Network',
    type: 'code',
    snippet: 'import torch\nimport torch.nn as nn\n\nclass SimpleNet(nn.Module):\n    def __init__(self):\n        super(SimpleNet, self).__init__()\n        self.layer1 = nn.Linear(in_features=784, out_features=128)\n        self.layer2 = nn.Linear(in_features=128, out_features=10)\n\n    def forward(self, x):\n        x = torch.relu(self.layer1(x))\n        x = self.layer2(x)\n        return x\n\nmodel = SimpleNet()',
    description: 'PyTorch is a popular deep learning framework. Neural networks are defined by creating a class that inherits from `nn.Module`, defining the layers in `__init__`, and specifying the forward pass logic in the `forward` method.',
    tags: ['ai', 'pytorch', 'deep learning', 'neural network', 'dl', 'library'],
  },
  {
    id: 'ai-rag-diagram',
    category: 'AI',
    subCategory: 'svg',
    title: 'RAG Architecture Diagram',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .label { font-size: 13px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#rag-arrow); }
    </style>
    <defs>
        <marker id="rag-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
    </defs>
    
    <!-- Query -->
    <text x="60" y="50" class="label">User Query</text>
    <text x="60" y="70" class="sub-label">"How does RAG work?"</text>
    <line x1="60" y1="80" x2="60" y2="120" class="arrow"/>
    
    <!-- Retriever -->
    <rect x="10" y="120" width="100" height="60" class="box"/>
    <text x="60" y="155" class="label">Retriever</text>
    <line x1="110" y1="150" x2="160" y2="150" class="arrow"/>
    <line x1="60" y1="180" x2="60" y2="210" class="arrow"/>
    <text x="135" y="140" class="sub-label" text-anchor="start">1. Search</text>
    
    <!-- Vector DB -->
    <rect x="160" y="120" width="100" height="60" class="box"/>
    <text x="210" y="145" class="label">Vector DB</text>
    <text x="210" y="165" class="sub-label">(Knowledge Base)</text>
    <line x1="160" y1="150" x2="110" y2="150" class="arrow"/>
    <text x="135" y="170" class="sub-label" text-anchor="start">2. Find Docs</text>
    
    <!-- Context -->
    <text x="160" y="225" class="sub-label" text-anchor="start">3. Context = Query + Retrieved Docs</text>
    <line x1="250" y1="180" x2="300" y2="110" class="arrow"/>
    
    <!-- LLM -->
    <rect x="300" y="50" width="100" height="60" class="box"/>
    <text x="350" y="85" class="label">LLM</text>
    <line x1="400" y1="80" x2="450" y2="80" class="arrow"/>
    
    <!-- Final Answer -->
    <text x="495" y="70" class="label">Augmented</text>
    <text x="495" y="90" class="label">Response</text>
</svg>`,
    description: 'A diagram illustrating the flow of Retrieval-Augmented Generation (RAG). A user\'s query is first used to retrieve relevant documents from a knowledge base (Vector DB). This context is then combined with the original query and sent to an LLM to generate a more informed and accurate response.',
    tags: ['ai', 'rag', 'llm', 'diagram', 'architecture', 'vector database', 'svg'],
  },
  {
    id: 'ai-16',
    category: 'AI',
    subCategory: 'python',
    title: 'Data Preprocessing: Feature Scaling',
    type: 'code',
    snippet: 'from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\n\n# Fit on training data and transform it\nX_train_scaled = scaler.fit_transform(X_train)\n\n# Only transform the test data (using the scaler fitted on train data)\nX_test_scaled = scaler.transform(X_test)',
    description: 'Many ML algorithms perform better when numerical input features are scaled to a standard range. StandardScaler standardizes features by removing the mean and scaling to unit variance.',
    tags: ['ai', 'ml', 'preprocessing', 'scaling', 'scikit-learn'],
  },
  {
    id: 'ai-12',
    category: 'AI',
    subCategory: 'python',
    title: 'Scikit-learn: Model Evaluation',
    type: 'code',
    snippet: 'from sklearn.metrics import accuracy_score, classification_report\n\n# Get predictions from the model\npredictions = model.predict(X_test)\n\n# Calculate accuracy\naccuracy = accuracy_score(y_test, predictions)\nprint(f"Accuracy: {accuracy:.2f}")\n\n# Get a detailed report (precision, recall, f1-score)\nprint(classification_report(y_test, predictions))',
    description: 'After training, a model\'s performance must be evaluated on the test set. Common metrics for classification include accuracy, precision, recall, and the F1-score.',
    tags: ['ai', 'scikit-learn', 'ml', 'metrics', 'evaluation', 'accuracy', 'precision', 'recall'],
  },
  {
    id: 'ai-10',
    category: 'AI',
    subCategory: 'python',
    title: 'Scikit-learn: Train/Test Split',
    type: 'code',
    snippet: 'from sklearn.model_selection import train_test_split\n\n# X are your features, y is your target variable\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)',
    description: 'A crucial step in model evaluation. The data is split into a training set (used to train the model) and a testing set (used to evaluate the trained model\'s performance on unseen data). This helps to check for overfitting.',
    tags: ['ai', 'scikit-learn', 'ml', 'train test split', 'evaluation'],
  },
  {
    id: 'ai-11',
    category: 'AI',
    subCategory: 'python',
    title: 'Scikit-learn: Training a Model',
    type: 'code',
    snippet: 'from sklearn.linear_model import LogisticRegression\n\n# 1. Instantiate the model\nmodel = LogisticRegression()\n\n# 2. Train the model using the training data\nmodel.fit(X_train, y_train)\n\n# 3. Make predictions on new data\npredictions = model.predict(X_test)',
    description: 'The standard Scikit-learn workflow involves creating an instance of a model, training it with the `.fit()` method, and using it to make predictions with the `.predict()` method.',
    tags: ['ai', 'scikit-learn', 'ml', 'model', 'fit', 'predict', 'training'],
  },
  {
    id: 'ai-5',
    category: 'AI',
    subCategory: 'python',
    title: 'Semantic Search',
    type: 'code',
    snippet: 'from sentence_transformers import SentenceTransformer, util\n\nmodel = SentenceTransformer(\'all-MiniLM-L6-v2\')\nsentences = [\'A man is eating food.\', \'A man is eating a piece of bread.\', \'The girl is playing football.\']\nquery = \'A man is eating a sandwich.\'\n\n# Encode sentences to get embeddings\nsentence_embeddings = model.encode(sentences)\nquery_embedding = model.encode(query)\n\n# Compute cosine similarity\ncos_scores = util.cos_sim(query_embedding, sentence_embeddings)[0]\nprint(f"Similarity with sentence 1: {cos_scores[0]:.2f}") // High\nprint(f"Similarity with sentence 2: {cos_scores[1]:.2f}") // High\nprint(f"Similarity with sentence 3: {cos_scores[2]:.2f}") // Low',
    description: 'Semantic search seeks to understand the intent and contextual meaning of a query, rather than just matching keywords. It works by converting both the query and the documents into embeddings and finding the closest matches in the vector space.',
    tags: ['ai', 'semantic search', 'search', 'nlp', 'embeddings', 'sentence-transformers'],
  },
  {
    id: 'ai-14',
    category: 'AI',
    subCategory: 'python',
    title: 'TensorFlow/Keras: Sequential Model',
    type: 'code',
    snippet: 'import tensorflow as tf\nfrom tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense\n\nmodel = Sequential([\n    Dense(128, activation=\'relu\', input_shape=(784,)),\n    Dense(10, activation=\'softmax\')\n])\n\nmodel.compile(optimizer=\'adam\', \n              loss=\'sparse_categorical_crossentropy\', \n              metrics=[\'accuracy\'])',
    description: 'TensorFlow is another major deep learning framework. Keras is its high-level API, which makes building models straightforward. The Sequential model is a simple stack of layers.',
    tags: ['ai', 'tensorflow', 'keras', 'deep learning', 'neural network', 'dl', 'library'],
  },
  {
    id: 'ai-4',
    category: 'AI',
    subCategory: 'text',
    title: 'Vector Databases Explained',
    type: 'code',
    snippet: 'Vector Database: A database designed to store and query high-dimensional vector embeddings efficiently.',
    description: 'Unlike traditional databases that index text or numbers, vector databases index embeddings. They use algorithms like HNSW or IVF to perform very fast Approximate Nearest Neighbor (ANN) searches, which is essential for tasks like semantic search or recommendation systems.',
    tags: ['ai', 'vector database', 'database', 'ann', 'search', 'embeddings'],
  },
];
