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
    description: '';
    displayName: 'Header';
    icon: '';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    gradientFrom: Schema.Attribute.Relation<
      'oneToOne',
      'api::brand-color.brand-color'
    >;
    gradientTo: Schema.Attribute.Relation<
      'oneToOne',
      'api::brand-color.brand-color'
    >;
    Paragraph: Schema.Attribute.Blocks;
    Title: Schema.Attribute.Component<'components.title', false>;
  };
}

export interface ComponentsServiceList extends Struct.ComponentSchema {
  collectionName: 'components_components_service_lists';
  info: {
    displayName: 'ServiceList';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface ComponentsSocialList extends Struct.ComponentSchema {
  collectionName: 'components_components_social_lists';
  info: {
    displayName: 'SocialList';
  };
  attributes: {
    socials: Schema.Attribute.Relation<'oneToMany', 'api::social.social'>;
  };
}

export interface ComponentsSupportList extends Struct.ComponentSchema {
  collectionName: 'components_components_support_lists';
  info: {
    displayName: 'SupportList';
  };
  attributes: {
    supports: Schema.Attribute.Relation<'oneToMany', 'api::support.support'>;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    description: '';
    displayName: 'Title';
  };
  attributes: {
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.header': ComponentsHeader;
      'components.service-list': ComponentsServiceList;
      'components.social-list': ComponentsSocialList;
      'components.support-list': ComponentsSupportList;
      'components.title': ComponentsTitle;
    }
  }
}
