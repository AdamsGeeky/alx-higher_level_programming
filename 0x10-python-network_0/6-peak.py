#!/usr/bin/python3

"""
function that finds a peak in a list of unsorted integers.
"""


def find_peak(list_of_integers):
    """
    function that finds a peak in a list of unsorted integers.
    """
    if len(list_of_integers) > 1:
        return max(list_of_integers)
    return
