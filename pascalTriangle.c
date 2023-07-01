#include <stdio.h>
#include <stdlib.h>

void freeTriangle(int **triangle, int numRows);

/**
 * pascalTriangle - function to generate an array that represent
 * pascal triangle
 * @numRows: number of rows in the mstrix
 *
 * Return: a pascal triangle
*/

int **pascalTriangle(int numRows)
{
	int **triangle, k, p;

	if (numRows <= 0)
		return (NULL);

	triangle = malloc(numRows * sizeof(int *));
	if (!triangle)
		return (NULL);
	for (p = 0; p < numRows; p++)
	{
		triangle[p] = malloc((p + 1) * sizeof(int));
		if (!triangle[p])
		{
			freeTriangle(triangle, p);
			return (NULL);
		}

		/*set the first and last element of the array as 1*/
		triangle[p][0] = 1;
		triangle[p][p] = 1;

		/*fill the other slot in the array with the value of the previous row*/
		for (k = 1; k < p; k++)
		{
			triangle[p][k] = triangle[p - 1][k - 1] + triangle[p - 1][k];
		}
	}
	return (triangle);
}

/**
 * freeTriangle - free an array of numbers represemting pascal
 * triangle
 * @triangle: a double pointer to a grid (array of numbers)
 * @numRows: number of rows in the matrix
 *
 * Return: void
 */

void freeTriangle(int **triangle, int numRows)
{
	int k = 0;

	while (k < numRows)
	{
		free(triangle[k]);
		k++;
	}
	free(triangle);
	triangle = NULL;
}

/**
 * printTriangle - print pascaltrinagle to the console
 * @numRows: number of row within the triangle
 *
 * Return: void
 */

void printTriangle(int numRows)
{
	int **triangleArray = pascalTriangle(numRows);
	int k, p;

	if (numRows <= 0)
		printf("%p\n", NULL);

	for (p = 0; p < numRows; p++)
	{
		for (k = 0; k <= p; k++)
		{
			printf("%d ", triangleArray[p][k]);
		}
		printf("\n");
	}

	freeTriangle(triangleArray, numRows);
}

/**
 * main - execution point
 *
 * Return: 0
 */

int main(void)
{
	printTriangle(-8);
	return (0);
}
