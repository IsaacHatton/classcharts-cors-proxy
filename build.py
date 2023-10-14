# covert README.md to build/index.html

import os
import sys

def main():
    # copy contents of readme.md to build/index.html
    with open('README.md', 'r') as f:
        readme = f.read()
        with open('build/index.html', 'w') as f:
            f.write(readme)