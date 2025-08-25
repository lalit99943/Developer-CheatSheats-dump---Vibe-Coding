import { CheatSheet } from '../../types';

export const goCheatSheets: CheatSheet[] = [
  {
    id: 'go-1',
    category: 'Go',
    subCategory: 'go',
    title: 'Basic Program Structure',
    type: 'code',
    snippet: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
    description: 'The basic structure of a Go program. Code is organized into packages. The `main` package is the entry point, and the `main` function is where execution begins.',
    tags: ['go', 'golang', 'basics', 'main', 'package'],
  },
  {
    id: 'go-2',
    category: 'Go',
    subCategory: 'go',
    title: 'Variables and Constants',
    type: 'code',
    snippet: `// Long form declaration
var myVar string = "hello"

// Short form (inside functions only)
myVarShort := "world"

const PI = 3.14`,
    description: 'Go is statically typed. `var` declares a variable. The `:=` syntax is a shortcut for declaring and initializing a variable inside functions. `const` declares a constant.',
    tags: ['go', 'golang', 'variables', 'const', 'types'],
  },
  {
    id: 'go-3',
    category: 'Go',
    subCategory: 'go',
    title: 'Goroutines (Concurrency)',
    type: 'code',
    snippet: `import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 3; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go say("world") // Start a new goroutine
    say("hello")
}`,
    description: 'A goroutine is a lightweight thread managed by the Go runtime. Start a new goroutine by using the `go` keyword before a function call. It allows for concurrent execution.',
    tags: ['go', 'golang', 'goroutine', 'concurrency', 'async'],
  },
  {
    id: 'go-4',
    category: 'Go',
    subCategory: 'go',
    title: 'Channels (Communication)',
    type: 'code',
    snippet: `func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
        sum += v
    }
    c <- sum // send sum to channel c
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    c := make(chan int)
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    x, y := <-c, <-c // receive from c

    fmt.Println(x, y, x+y)
}`,
    description: 'Channels are a typed conduit through which you can send and receive values with the `<-` operator. They are the primary way to communicate between goroutines.',
    tags: ['go', 'golang', 'channels', 'concurrency', 'communication'],
  },
  {
    id: 'go-goroutine-diagram',
    category: 'Go',
    subCategory: 'svg',
    title: 'Goroutines and Channels',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .channel-box { fill: #0f172a; stroke: #475569; rx: 5; }
        .label { font-size: 14px; font-weight: 600; fill: #e2e8f0; text-anchor: middle; }
        .sub-label { font-size: 11px; fill: #94a3b8; text-anchor: middle; font-family: 'Fira Code', monospace;}
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#go-arrow); }
        .send-arrow { stroke: #34d399; }
        .receive-arrow { stroke: #f59e0b; }
    </style>
    <defs>
        <marker id="go-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
    </defs>

    <!-- Goroutine 1 -->
    <rect x="20" y="80" width="120" height="90" class="box"/>
    <text x="80" y="70" class="label">Goroutine 1</text>
    <text x="80" y="110" class="sub-label">... work ...</text>
    <text x="80" y="130" class="sub-label" fill="#a7f3d0">ch <- "data"</text>
    <text x="80" y="150" class="sub-label">... work ...</text>

    <!-- Goroutine 2 -->
    <rect x="310" y="80" width="120" height="90" class="box"/>
    <text x="370" y="70" class="label">Goroutine 2</text>
    <text x="370" y="110" class="sub-label">... work ...</text>
    <text x="370" y="130" class="sub-label" fill="#fcd34d">val := <-ch</text>
    <text x="370" y="150" class="sub-label">... work ...</text>

    <!-- Channel -->
    <rect x="180" y="105" width="90" height="40" class="channel-box"/>
    <text x="225" y="130" class="label">Channel</text>

    <!-- Arrows -->
    <path d="M 140 125 L 180 125" class="arrow send-arrow" marker-end="url(#go-arrow)"/>
    <path d="M 270 125 L 310 125" class="arrow receive-arrow" marker-end="url(#go-arrow)"/>
    
</svg>`,
    description: 'A diagram illustrating concurrency in Go. Goroutines are lightweight threads that run concurrently. They communicate and synchronize using Channels. One goroutine sends data into the channel (`ch <-`), and another receives data from it (`<- ch`), providing a safe way to share data without explicit locks.',
    tags: ['go', 'golang', 'goroutine', 'channel', 'concurrency', 'diagram', 'svg'],
  },
  {
    id: 'go-5',
    category: 'Go',
    subCategory: 'go',
    title: 'Slices (Dynamic Arrays)',
    type: 'code',
    snippet: `s := make([]string, 3) // Create a slice of strings with length 3
s[0] = "a"

s = append(s, "d") // Add new elements

// Slice a slice to get a new view
two_three := s[1:3]`,
    description: 'Slices are a key data type in Go, providing a more powerful interface to sequences than arrays. A slice is a descriptor of a contiguous segment of an underlying array and is composed of a pointer, a length, and a capacity.',
    tags: ['go', 'golang', 'slice', 'array', 'data structures'],
  },
];
