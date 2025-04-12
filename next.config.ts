import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');
 
const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);