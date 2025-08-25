import { CheatSheet } from '../../types';

export const springCheatSheets: CheatSheet[] = [
  {
    id: 'spring-ai-3',
    category: 'Spring',
    subCategory: 'java',
    title: 'AI: Basic Chat Request',
    snippet: `@RestController
public class ChatController {
    private final ChatClient chatClient;

    @Autowired
    public ChatController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @GetMapping("/ai/simple")
    public String simpleChat() {
        return chatClient.call("Tell me a joke");
    }
}`,
    description: 'The ChatClient is the central interface for interacting with LLMs. Autowire it and use the .call() method for a simple request-response interaction.',
    tags: ['spring ai', 'chatclient', 'llm', 'ai', 'java', 'openai'],
  },
  {
    id: 'spring-ai-10',
    category: 'Spring',
    subCategory: 'java',
    title: 'AI: Function Calling',
    snippet: `// In your ChatController, referencing a bean that defines the function
ChatResponse response = chatClient.call(new Prompt(
    "What's the weather like in San Francisco?",
    AiOptions.builder().withFunction("weatherFunction").build()
));

// Function definition in another bean
@Bean
@Description("Get the weather in a location")
public Function<WeatherRequest, WeatherResponse> weatherFunction() {
    return (request) -> new WeatherResponse("The weather in " + request.location() + " is sunny.");
}
`,
    description: 'Enable the LLM to call your application\'s Java functions. Define a Function bean with an @Description annotation and reference its name in the ChatClient call options. Spring AI handles the mapping.',
    tags: ['spring ai', 'function calling', 'tools', 'llm', 'api'],
  },
  {
    id: 'spring-ai-11',
    category: 'Spring',
    subCategory: 'java',
    title: 'AI: Image Generation',
    snippet: `@Autowired
private ImageClient imageClient;

public String generateImage() {
    ImagePrompt imagePrompt = new ImagePrompt("A photorealistic cat astronaut on the moon.");
    ImageResponse response = imageClient.call(imagePrompt);
    String imageUrl = response.getResult().getOutput().getUrl();
    return imageUrl;
}`,
    description: 'Use the ImageClient interface to generate images from a text prompt. The client must be backed by a model that supports image generation (e.g., DALL-E 3 with OpenAI).',
    tags: ['spring ai', 'image generation', 'imageclient', 'dalle', 'openai'],
  },
  {
    id: 'spring-ai-9',
    category: 'Spring',
    subCategory: 'java',
    title: 'AI: RAG - Augmenting a Prompt',
    snippet: `public String ragQuery(String userQuery) {
    // 1. Retrieve relevant documents from the VectorStore
    List<Document> similarDocuments = vectorStore.similaritySearch(userQuery);
    String context = similarDocuments.stream()
            .map(Document::getContent)
            .collect(Collectors.joining(System.lineSeparator()));

    // 2. Create a prompt with the retrieved context
    String template = """
            Answer the user's question based on the following information:
            {context}
            
            Question: {question}
            """;
    PromptTemplate promptTemplate = new PromptTemplate(template);
    Prompt prompt = promptTemplate.create(Map.of(
        "context", context, 
        "question", userQuery
    ));

    // 3. Call the LLM with the augmented prompt
    return chatClient.call(prompt).getResult().getOutput().getContent();
}`,
    description: 'The core of RAG: find documents semantically similar to the user\'s query, inject their content into a prompt as context, and then ask the LLM to answer based on that context.',
    tags: ['spring ai', 'rag', 'prompt', 'context', 'vectorstore', 'retrieval'],
  },
];
