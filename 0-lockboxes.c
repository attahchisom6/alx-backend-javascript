#include <stdbool.h>
#include <stdlib.h>

bool canUnlockAll(int **boxes, int boxesSize, int *boxesColSize) {
    int n = boxesSize;
    bool *visited = (bool *)malloc(n * sizeof(bool)); // Keeps track of visited boxes
    for (int i = 0; i < n; i++) {
        visited[i] = false;
    }
    
    visited[0] = true; // Mark the first box as visited
    int *stack = (int *)malloc(n * sizeof(int)); // Stack to perform DFS
    int top = 0; // Top of the stack
    stack[top] = 0; // Initialize the stack with the first box

    while (top >= 0) {
        int box = stack[top];
        top--;

        int keysCount = boxesColSize[box];
        for (int i = 0; i < keysCount; i++) {
            int key = boxes[box][i];
            if (key < n && !visited[key]) {
                visited[key] = true;
                top++;
                stack[top] = key;
            }
        }
    }
    
    free(stack);
    bool result = true;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            result = false;
            break;
        }
    }
    
    free(visited);
    return result;
}
