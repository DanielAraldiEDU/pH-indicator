import { memo, useMemo, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';

import { TooltipLayoutProps, TooltipProps } from '@/@types';

import Icon from '../Icon';
import Text from '../Text';
import { makeStyles } from './styles';
import { theme } from '@/styles';

function Tooltip(props: TooltipProps) {
  const { pH = 0, locationX = 0, locationY = 0 } = props;

  const [tooltipLayout, setTooltipLayout] = useState<TooltipLayoutProps>({
    width: 0,
    height: 0,
  });

  function onLayout(event: LayoutChangeEvent): void {
    setTooltipLayout(event.nativeEvent.layout);
  }

  const translates = useMemo(() => {
    const translateX = locationX - tooltipLayout.width / 2;
    const translateY =
      locationY - (tooltipLayout.height + theme.spacings['1.5']);

    return {
      transform: [{ translateX }, { translateY }],
    };
  }, [locationX, locationY, tooltipLayout]);

  const pHLabel = useMemo(() => {
    const pHPrecision = pH < 10 ? 3 : 4;
    const pHValue = pH.toPrecision(pHPrecision);

    if (pH <= 1) return `pH ${pHValue} (Altamente ácido)`;
    else if (pH > 1 && pH < 3) return `pH ${pHValue} (Muito ácido)`;
    else if (pH >= 3 && pH < 5) return `pH ${pHValue} (Ácido)`;
    else if (pH >= 5 && pH < 7) return `pH ${pHValue} (Pouco ácido)`;
    else if (pH === 7) return `pH ${pHValue} (Neutro)`;
    else if (pH > 7 && pH < 9) return `pH ${pHValue} (Pouco básico)`;
    else if (pH >= 9 && pH < 11) return `pH ${pHValue} (Básico)`;
    else if (pH >= 11 && pH < 13) return `pH ${pHValue} (Muito básico)`;
    else return `pH ${pHValue} (Altamente básico)`;
  }, [pH]);

  const styles = useMemo(
    () => makeStyles({ width: tooltipLayout.width }),
    [tooltipLayout, pH]
  );

  return (
    <View
      accessible={false}
      focusable={false}
      pointerEvents='none'
      style={[styles.container, { ...translates }]}
      onLayout={onLayout}
    >
      <View style={styles.content}>
        <Icon name='flask' color='primary' />

        <Text color='primary'>{pHLabel}</Text>
      </View>

      <View style={styles.triangle} />
    </View>
  );
}

export default memo(Tooltip);
