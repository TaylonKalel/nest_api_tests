import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function useCase(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const fileName = strings.dasherize(options.name);
    const filePath = `src/use-cases/${fileName}.use-case.ts`;

    const templateSource = `
import { Injectable } from '@nestjs/common';

@Injectable()
export class ${strings.classify(options.name)}UseCase {
  constructor() {}

  // Implement your use-case logic here
}
    `;

    tree.create(filePath, templateSource);

    return tree;
  };
}
