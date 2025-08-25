import { CheatSheet } from '../../types';

export const junitCheatSheets: CheatSheet[] = [
  {
    id: 'junit-1',
    category: 'JUnit',
    subCategory: 'java',
    title: '@Test Annotation',
    type: 'code',
    snippet: `@Test
void myFirstTest() {
    assertEquals(2, 1 + 1);
}`,
    description: 'The @Test annotation marks a method as a test method. This method will be executed by the test runner.',
    tags: ['junit', 'junit5', 'test', 'annotation', 'basic'],
  },
  {
    id: 'junit-2',
    category: 'JUnit',
    subCategory: 'java',
    title: 'Assertion Methods',
    type: 'code',
    snippet: `import static org.junit.jupiter.api.Assertions.*;

@Test
void standardAssertions() {
    assertEquals(2, 2);
    assertTrue(true, "The optional assertion message is printed on failure");
    assertNotNull(new Object());
}`,
    description: 'Assertions are static methods in the `org.junit.jupiter.api.Assertions` class used to check conditions within tests. A failing assertion will cause the test to fail.',
    tags: ['junit', 'junit5', 'assertions', 'assertEquals', 'assertTrue'],
  },
  {
    id: 'junit-3',
    category: 'JUnit',
    subCategory: 'java',
    title: 'Test Lifecycle Annotations',
    type: 'code',
    snippet: `@BeforeAll
static void setupAll() { /* Runs once before all tests */ }

@BeforeEach
void setup() { /* Runs before each test */ }

@AfterEach
void tearDown() { /* Runs after each test */ }

@AfterAll
static void tearDownAll() { /* Runs once after all tests */ }`,
    description: 'JUnit 5 provides annotations to execute setup or teardown logic at different points in the test lifecycle. @BeforeAll and @AfterAll must be static.',
    tags: ['junit', 'junit5', 'lifecycle', 'setup', 'teardown', 'beforeeach', 'aftereach'],
  },
  {
    id: 'junit-4',
    category: 'JUnit',
    subCategory: 'java',
    title: '@DisplayName and @Disabled',
    type: 'code',
    snippet: `@Test
@DisplayName("This is a custom test name with spaces and symbols")
void testWithCustomName() { /* ... */ }

@Test
@Disabled("This test is disabled for a reason")
void skippedTest() { /* ... */ }`,
    description: '@DisplayName provides a custom, more readable name for a test class or method. @Disabled is used to skip the execution of a test method or class.',
    tags: ['junit', 'junit5', 'displayname', 'disabled', 'skip'],
  },
  {
    id: 'junit-5',
    category: 'JUnit',
    subCategory: 'java',
    title: 'Testing for Exceptions',
    type: 'code',
    snippet: `@Test
void exceptionTesting() {
    IllegalArgumentException exception = assertThrows(
        IllegalArgumentException.class,
        () -> {
            // Code that is expected to throw the exception
            throw new IllegalArgumentException("a message");
        }
    );
    assertEquals("a message", exception.getMessage());
}`,
    description: 'The `assertThrows` assertion checks that a piece of code throws a specific type of exception. It returns the exception instance, allowing for further assertions on its properties.',
    tags: ['junit', 'junit5', 'exception', 'assertThrows', 'testing'],
  },
  {
    id: 'junit-6',
    category: 'JUnit',
    subCategory: 'java',
    title: 'Parameterized Tests',
    type: 'code',
    snippet: `@ParameterizedTest
@ValueSource(strings = { "racecar", "radar", "level" })
void palindromes(String candidate) {
    assertTrue(isPalindrome(candidate));
}`,
    description: 'Parameterized tests allow you to run the same test multiple times with different arguments. @ValueSource is a simple way to provide a literal array of values.',
    tags: ['junit', 'junit5', 'parameterized', 'valuesource', 'testing'],
  },
  {
    id: 'junit-7',
    category: 'JUnit',
    subCategory: 'java',
    title: 'Mockito Integration: @ExtendWith',
    type: 'code',
    snippet: `import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class MyMockitoTest {
    // ... tests using Mockito ...
}`,
    description: 'To enable Mockito annotations like @Mock and @InjectMocks in JUnit 5, you need to register the `MockitoExtension` with the test class using `@ExtendWith`.',
    tags: ['junit', 'junit5', 'mockito', 'extendwith', 'integration', 'testing'],
  },
  {
    id: 'junit-8',
    category: 'JUnit',
    subCategory: 'java',
    title: 'Mockito Integration: @Mock and @InjectMocks',
    type: 'code',
    snippet: `@ExtendWith(MockitoExtension.class)
class MyServiceTest {
    @Mock
    private UserRepository userRepository; // Create a mock

    @InjectMocks
    private UserServiceImpl userService; // Create instance and inject mocks

    @Test
    void testGetUser() {
        // Given
        when(userRepository.findById(1L)).thenReturn(Optional.of(new User("test")));

        // When
        User user = userService.getUserById(1L);

        // Then
        assertNotNull(user);
        verify(userRepository).findById(1L); // Verify interaction
    }
}`,
    description: '@Mock creates a mock object for a class or interface. @InjectMocks creates an instance of the class and injects the fields annotated with @Mock into it. This simplifies the setup for testing services.',
    tags: ['junit', 'junit5', 'mockito', 'mock', 'injectmocks', 'unit testing'],
  },
];
