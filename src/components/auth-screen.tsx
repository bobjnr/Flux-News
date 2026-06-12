import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type AuthScreenProps = {
  mode: 'sign-up' | 'sign-in';
};

const isSignUp = (mode: AuthScreenProps['mode']) => mode === 'sign-up';

export function AuthScreen({ mode }: AuthScreenProps) {
  const primaryLabel = isSignUp(mode) ? 'Sign Up' : 'Sign in';
  const alternateText = isSignUp(mode) ? 'Already have an account?' : "Don't have an account?";
  const alternateLabel = isSignUp(mode) ? 'Sign in' : 'Sign up';
  const alternateHref = isSignUp(mode) ? '/sign-in' : '/';

  return (
    <ScrollView
      style={styles.screen}
      bounces={false}
      contentContainerStyle={styles.scrollContent}
      contentInsetAdjustmentBehavior="never">
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <PortraitBackdrop />

        <View style={styles.logoTile}>
          <Image
            source={require('@/assets/images/icon.png')}
            style={styles.logo}
            contentFit="cover"
            transition={150}
          />
        </View>

        <View style={styles.outerPanel}>
          <View style={styles.card}>
            <View style={styles.titlePill}>
              <Text style={styles.title}>{primaryLabel}</Text>
            </View>

            <View style={styles.form}>
              <Field label="Email" placeholder="Your email" keyboardType="email-address" />
              <Field label="Password" placeholder="enter your password" secureTextEntry />
            </View>

            <View style={styles.optionsRow}>
              <View style={styles.checkbox} />
              <Text style={styles.optionText}>I accept the terms and privacy policy</Text>
              {!isSignUp(mode) ? <Text style={styles.forgotText}>Forgot password?</Text> : null}
            </View>

            <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <Text style={styles.primaryText}>{primaryLabel}</Text>
            </Pressable>

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or {isSignUp(mode) ? 'Register' : 'Register'} with</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <SocialButton label="f" color="#3478f6" />
              <SocialButton label="G" color="#4285f4" />
              <SocialButton label="a" color="#111111" apple />
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>{alternateText} </Text>
              <Link href={alternateHref} asChild>
                <Pressable hitSlop={8}>
                  <Text style={styles.footerLink}>{alternateLabel}</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

type FieldProps = React.ComponentProps<typeof TextInput> & {
  label: string;
};

function Field({ label, ...inputProps }: FieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputShell}>
        <TextInput
          {...inputProps}
          placeholderTextColor="#a7a7a7"
          style={styles.input}
          autoCapitalize="none"
        />
        {inputProps.secureTextEntry ? <Text style={styles.eyeIcon}>⌘</Text> : null}
      </View>
    </View>
  );
}

function SocialButton({
  label,
  color,
  apple,
}: {
  label: string;
  color: string;
  apple?: boolean;
}) {
  return (
    <Pressable style={({ pressed }) => [styles.socialButton, pressed && styles.pressed]}>
      <Text style={[styles.socialText, { color }, apple && styles.appleText]}>{label}</Text>
    </Pressable>
  );
}

function PortraitBackdrop() {
  return (
    <View pointerEvents="none" style={styles.backdrop}>
      <View style={styles.darkScrim} />
      <View style={styles.hairMass} />
      <View style={styles.faceShape} />
      <View style={styles.neckShape} />
      <View style={styles.jacketLeft} />
      <View style={styles.jacketRight} />
      <View style={styles.tieShape} />
      <View style={styles.glowPane} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#20242a',
  },
  scrollContent: {
    flexGrow: 1,
  },
  safeArea: {
    minHeight: 720,
    flex: 1,
    alignItems: 'center',
    paddingTop: 88,
    paddingHorizontal: 24,
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    overflow: 'hidden',
    backgroundColor: '#282b2f',
  },
  darkScrim: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },
  hairMass: {
    position: 'absolute',
    right: -20,
    top: 105,
    width: 230,
    height: 265,
    borderRadius: 115,
    backgroundColor: 'rgba(158, 155, 154, 0.34)',
    transform: [{ rotate: '-9deg' }],
  },
  faceShape: {
    position: 'absolute',
    right: 20,
    top: 170,
    width: 140,
    height: 220,
    borderRadius: 70,
    backgroundColor: 'rgba(192, 166, 151, 0.36)',
  },
  neckShape: {
    position: 'absolute',
    right: 66,
    top: 374,
    width: 62,
    height: 92,
    borderRadius: 18,
    backgroundColor: 'rgba(176, 143, 129, 0.4)',
  },
  jacketLeft: {
    position: 'absolute',
    left: -20,
    bottom: -70,
    width: 210,
    height: 330,
    backgroundColor: 'rgba(39, 55, 65, 0.78)',
    transform: [{ rotate: '-24deg' }],
  },
  jacketRight: {
    position: 'absolute',
    right: -48,
    bottom: -90,
    width: 210,
    height: 340,
    backgroundColor: 'rgba(51, 70, 78, 0.7)',
    transform: [{ rotate: '18deg' }],
  },
  tieShape: {
    position: 'absolute',
    left: 86,
    bottom: -6,
    width: 52,
    height: 275,
    backgroundColor: 'rgba(132, 24, 49, 0.84)',
    transform: [{ rotate: '-15deg' }],
  },
  glowPane: {
    position: 'absolute',
    left: -54,
    top: 395,
    width: 180,
    height: 380,
    backgroundColor: 'rgba(238, 246, 249, 0.18)',
    transform: [{ rotate: '-24deg' }],
  },
  logoTile: {
    width: 86,
    height: 86,
    borderRadius: 8,
    backgroundColor: 'rgba(123, 145, 180, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  logo: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  outerPanel: {
    width: '100%',
    maxWidth: 330,
    marginTop: 28,
    borderRadius: 32,
    padding: 18,
    backgroundColor: 'rgba(217, 220, 220, 0.9)',
    zIndex: 1,
  },
  card: {
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 22,
    backgroundColor: 'rgba(248, 248, 248, 0.82)',
    gap: 12,
  },
  titlePill: {
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    color: '#181818',
  },
  form: {
    gap: 8,
    paddingHorizontal: 4,
  },
  field: {
    gap: 4,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    color: '#3b3b3b',
  },
  inputShell: {
    minHeight: 35,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#aeb0b3',
    backgroundColor: 'rgba(245, 245, 245, 0.62)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: '#202020',
    paddingVertical: 0,
  },
  eyeIcon: {
    fontSize: 12,
    color: '#8f9299',
    transform: [{ rotate: '35deg' }],
  },
  optionsRow: {
    minHeight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8b95a7',
    marginRight: 5,
  },
  optionText: {
    flex: 1,
    fontSize: 9,
    color: '#5f6470',
  },
  forgotText: {
    fontSize: 9,
    color: '#4e5260',
  },
  primaryButton: {
    height: 34,
    borderRadius: 17,
    backgroundColor: '#8994a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ffffff',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 2,
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#c8c8c8',
  },
  dividerText: {
    fontSize: 8,
    color: '#aaaaaa',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    height: 45,
    borderRadius: 7,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#babcc0',
    backgroundColor: 'rgba(247, 247, 247, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    fontSize: 19,
    fontWeight: '800',
  },
  appleText: {
    fontSize: 20,
    fontFamily: 'serif',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
  },
  footerText: {
    fontSize: 9,
    color: '#4b4b4b',
  },
  footerLink: {
    fontSize: 9,
    color: '#171717',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.72,
  },
});
