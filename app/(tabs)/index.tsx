import { WebView } from 'react-native-webview'
import { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <View style={{ marginTop: 48, height: '100%' }}>
            {isLoading && <ActivityIndicator size='large' color='#0000ff'/>}
            <WebView
                cacheMode={'LOAD_NO_CACHE'}
                allowsBackForwardNavigationGestures={true}
                style={{ opacity: isLoading ? 0 : 1 }}
                source={{ uri: 'https://drurymirror.org' }}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
                injectedJavaScript={`
                    let style = document.createElement('style');
                    document.head.appendChild(style);
                    style.innerHTML = 'body > div.wrapper { width: 100%; margin: 0; }';
                    document.querySelector('#header-top').remove();
                    document.querySelector('#header-middle').remove();
                `}
            />
        </View>
    )
}
