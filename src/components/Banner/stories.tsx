import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export const BannerArgs = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

export default {
  title: 'Banner',
  component: Banner,
  args: {
    ...BannerArgs
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
