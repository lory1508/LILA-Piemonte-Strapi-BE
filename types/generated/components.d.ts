import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Size: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl', 'full']>;
    Style: Schema.Attribute.Enumeration<
      ['Primary', 'Secondary', 'Outline', 'Outline Icon']
    >;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: '';
  };
  attributes: {
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.header': ComponentsHeader;
      'components.title': ComponentsTitle;
    }
  }
}
