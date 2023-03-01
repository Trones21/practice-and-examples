package main

//https://golang.org/doc/tutorial/compile-install
//go build - compiles only
//go install - compiles and ?installs? -
//I guess this just means it adds the .exe to a dir in the system PATH env variable
type Edge struct {
	startNode, endNode int
}

func main() {

	var startEdges = [3]int{2, 1, 4}
	var endEdges = [3]int{3, 2, 5}

	solution(3, startEdges[:], endEdges[:])
}

//Check for all edge connections from 1..N
func solution(n int, startEdges, endEdges []int) {
	//slice []<Type> or  func make([]T, len, cap) []T  i.e make([]byte, 5, 5)  https://blog.golang.org/slices-intro
	//array [N]<type>
	var edges = []Edge{}
	for i := 0; i < len(startEdges); i++ {
		var node = Edge{}
		node.startNode = startEdges[i]
		node.endNode = endEdges[i]

		/*Slices provide more functionality over arrays */
		edges = append(edges, node)
	}
}
