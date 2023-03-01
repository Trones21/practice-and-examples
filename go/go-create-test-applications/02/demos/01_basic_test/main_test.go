package main_test

import "testing"

func reportFailure(got, expected interface{}, t *testing.T) {
	t.Errorf("Did not get expected result. Got: '%v', wanted: '%v'", got, expected)
}

func TestAddition(t *testing.T) {
	got := 2 + 2
	expected := 4
	if got != expected {
		reportFailure(got, expected, t)
	}
}

func TestSubtraction(t *testing.T) {
	got := 10 - 5
	expected := 4
	if got != expected {
		reportFailure(got, expected, t)
	}
}
