
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { addPackageJsonDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';

export default function(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Adding SignalScope...');

    addPackageJsonDependency(tree, {
      type: NodeDependencyType.Default,
      name: 'signal-scope',
      version: '^0.1.0',
      overwrite: true
    });

    _context.logger.info('✅ SignalScope added. Add this to main.ts:');
    _context.logger.info("\nimport 'signal-scope/setup-signal-scope';\n");

    return tree;
  };
}
