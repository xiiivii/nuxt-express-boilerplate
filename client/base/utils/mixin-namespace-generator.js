/*
**  Generates unique namespace props for mixins.
**
**  Docs: https://vuejs.org/v2/style-guide/#Private-property-names-essential
*/

export default (name, props) => props.reduce(
    (acc, prop) => ({ ...acc, [prop]: `$_ga_${name}Mixin_${prop}` }),
    {}
);
