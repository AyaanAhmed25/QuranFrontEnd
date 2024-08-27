import React from 'react';

import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import Section from './Section';

import { QuranFont } from '@/types/QuranReader';
import { isQCFFont } from '@/utils/fontFaceHelper';

interface Props {
  quranFont: QuranFont;
}

const QuranFontSectionFooter: React.FC<Props> = ({ quranFont }) => {
  const { t } = useTranslation('common');
  const isTajweed = quranFont === QuranFont.Tajweed;
  return (
    <Section.Footer visible={isQCFFont(quranFont) || isTajweed}>
      {isTajweed ? (
        <Trans
          i18nKey="common:fonts.tajweed-desc"
          components={[<Link key={0} href="/tajweed-colors" prefetch={false} legacyBehavior />]}
        />
      ) : (
        t('fonts.qcf-desc')
      )}
    </Section.Footer>
  );
};

export default QuranFontSectionFooter;
