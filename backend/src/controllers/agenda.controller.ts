import { Request, Response } from 'express';
import { HttpStatus } from '../utils/http-status.enum';

export const getAgenda = async (req: Request, res: Response) => {
  try {
    const result = {
      id: '123',
      title: 'Occurrence title',
      description:
        'ALUMNI VOICES - POSTPONED Finding an internship during COVID 19 outbrek and turning it towards a full-time position with Rabiga MARCULAN',
      website: 'https://www.alumnforce.com',
      webinarUrl: 'https://www.alumnforce.com',
      begin_at: '2020-03-15 17:10:00',
      end_at: '2020-03-15 17:10:00',
      created: '2020-03-15 17:10:00',
      updated: '2020-03-15 17:10:00',
      cover:
        'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      thumbnail: '/medias/image/thumbnail_27499552060c0d262d8601.jpg',
      _embedded: {
        address: {
          venue: 'Exhibition center',
          address: '5 Rue Marguerite de Rochechouart',
          address_2: '',
          city: 'Paris',
          zip: '75009',
          country_iso: 'FR',
          latitude: '48.877013',
          longitude: '2.345189',
        },
        author: {
          id: '123',
          name: 'John Doe',
          email: 'john.doe@alumnforce.com',
          avatar: {
            user_id: '123',
            display_name: 'John Smith III',
            profile_photo:
              'https://cdn-af.example.net/medias/profile/XXXXX.png',
            color: '#AB120F',
            initials: 'JS',
            _links: {
              self: {
                href: 'string',
              },
            },
          },
          _links: {
            self: {
              href: 'string',
            },
          },
        },
        status: {
          id: 1,
          name: 'occurrence_is_waiting_for_validation',
          label: 'En attente de validation',
          _links: {
            self: {
              href: 'string',
            },
          },
        },
        category: {
          id: '123',
          name: "{'en': 'Evenings'}",
        },
        groups: {
          id: '123',
          name: 'Contractors',
          description: 'Group for contractors users',
          _links: {
            self: {
              href: 'string',
            },
          },
        },
      },
      is_on_site: true,
      is_webinar: true,
      seat_available: '5',
      replay_link: 'https://redirect.com',
      web_url: 'https://website.com/foo/bar',
      _links: {
        self: {
          href: 'string',
        },
      },
    };
    return res.status(HttpStatus.OK).json(result);
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
  }
};
