const SITE_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <g fill="none" stroke="#F7751D" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10">
            <path d="M15.6 49h24.8"/>
            <path d="M15.6 41h33.067"/>
            <circle cx="32" cy="20" r="4"/>
            <path d="M37 30.25l-3-6.625"/>
            <path d="M30 24.125L27 30"/>
            <path d="M56 63H8a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h48a3 3 0 0 1 3 3v56a3 3 0 0 1-3 3z"/>
            <circle cx="32" cy="21" r="11"/>
        </g>
    </svg>
`
const DNS_SVG = `
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <path fill="#5F6062" d="M13,29H8v14h4.801c4.841,0,6.781-3.661,6.781-7.241C19.583,32.298,17.641,29,13,29z M12.781,41H10V31h2.821
            c3.161,0,4.501,2.479,4.501,4.96C17.322,38.481,16.082,41,12.781,41z M31,29h2v14h-2.621l-5.24-9.282l-1.04-2.261l-0.18,0.021
            L24,34.078V43h-1.822L22,29h3l4.979,8.899l0.96,1.96l0.06,0.02l-0.3-2.521L31,29z M44.442,39.039C44.302,41.699,41.841,43,39.641,43
            c-1.86,0-3.821-1.04-4.641-3.241l1.9-0.939c0.66,1.42,1.62,2.1,2.8,2.1c1.38,0.021,2.381-0.819,2.441-2
            c0.12-1.681-1.521-2.16-2.681-2.461c-1.78-0.479-4.141-1.36-4.041-4.181c0.06-2.74,2.301-3.94,4.421-3.94
            c1.84,0,3.581,1.06,4.321,3.12l-1.801,0.82c-0.52-1.3-1.58-1.9-2.541-1.9c-1.04-0.02-2.08,0.601-2.16,1.961
            c-0.08,1.32,1.4,1.86,2.4,2.12C42.222,35.018,44.562,35.878,44.442,39.039z M53,8c-6.065,0-11,4.935-11,11
            c0,1.041,0.155,2.045,0.426,3H5c-2.757,0-5,2.243-5,5v18c0,2.757,2.243,5,5,5h42c2.757,0,5-2.243,5-5V29.949
            C52.33,29.979,52.662,30,53,30c6.065,0,11-4.935,11-11S59.065,8,53,8z M50,45c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V27
            c0-1.654,1.346-3,3-3h38.214c1.379,2.688,3.828,4.733,6.786,5.574V45z M53,28c-4.962,0-9-4.037-9-9s4.038-9,9-9s9,4.037,9,9
            S57.962,28,53,28z M58.707,15.293c0.391,0.391,0.391,1.023,0,1.414l-6,6C52.512,22.902,52.256,23,52,23s-0.512-0.098-0.707-0.293
            l-4-4c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L52,20.586l5.293-5.293C57.684,14.902,58.316,14.902,58.707,15.293z"/>
    </svg>
`
const CERTIFICATE_SVG = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <polyline fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
            36.918,49 1,49 1,7 63,7 63,49 48,49 "/>
        <path fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M9,7c0,0-0.083,8-8,8"/>
        <path fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M54,7c0,0,0.083,8,8,8"/>
        <path fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M9,48c0,0-0.083-8-8-8"/>
        <path fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M54,48c0,0,0.083-8,8-8"/>
        <circle fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="42.5" cy="38.5" r="8.5"/>
        <polyline fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
            36.918,44.904 36.918,59 42.459,53.459 48,59 48,44.978 "/>
        <line fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="25" y1="18" x2="39" y2="18"/>
        <line fill="none" stroke="#F7B21D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="14" y1="24" x2="50" y2="24"/>
    </svg>
`
const AUTORENEWAL_SVG = `
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <path fill="#846558" d="M19.207,44.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l7.197,7.197
            C24.329,52.966,23.664,53,23,53C11.42,53,2,43.579,2,32c0-8.261,4.871-15.784,12.409-19.168l-0.819-1.824
            C5.334,14.713,0,22.953,0,32c0,12.683,10.318,23,23,23c0.732,0,1.465-0.039,2.194-0.108l-7.401,7.401
            c-0.391,0.391-0.391,1.023,0,1.414C17.988,63.902,18.244,64,18.5,64s0.512-0.098,0.707-0.293l9-9c0.391-0.391,0.391-1.023,0-1.414
            L19.207,44.293z M55,41H44.167C45.381,38.159,46,35.14,46,32C46,19.317,35.682,9,23,9c-0.735,0-1.471,0.048-2.203,0.117l7.41-7.41
            c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-9,9c-0.391,0.391-0.391,1.023,0,1.414l9,9C26.988,19.902,27.244,20,27.5,20
            s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-7.189-7.189C21.677,11.042,22.339,11,23,11c11.58,0,21,9.421,21,21
            c0,3.159-0.688,6.181-2.031,9H41c-4.962,0-9,4.037-9,9s4.038,9,9,9h14c4.962,0,9-4.037,9-9S59.962,41,55,41z M19.914,10l0.052-0.052
            l0.016,0.12L19.914,10z M55,57H41c-3.86,0-7-3.141-7-7s3.14-7,7-7h14c3.86,0,7,3.141,7,7S58.86,57,55,57z M55,45
            c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S57.757,45,55,45z M55,53c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3
            S56.654,53,55,53z"/>
    </svg>
`
const CLOUD_SVG = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <path fill="none" stroke="#00BABA" stroke-width="2" stroke-miterlimit="10" d="M62.999,34.5c0-9.112-7.387-16.5-16.5-16.5
            c-1.878,0-3.675,0.329-5.357,0.907C38.116,15.298,33.577,13,28.499,13c-8.612,0-15.674,6.601-16.425,15.018
            C5.921,28.244,0.999,33.29,0.999,39.498c0,6.183,4.882,11.212,11,11.476L48.187,51C48.187,51,62.999,50.602,62.999,34.5z"/>
    </svg>
`
const SSL_SVG = `
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <path fill="#77B53C" d="M56,15.567L39.396,0H7v58h32v5c0,0.404,0.244,0.77,0.617,0.924c0.374,0.155,0.803,0.069,1.09-0.217
            L43,61.414l2.293,2.293C45.484,63.898,45.74,64,46,64c0.129,0,0.259-0.024,0.383-0.076C46.756,63.77,47,63.404,47,63v-5h9V15.567z
            M40,3.308L52.471,15H40V3.308z M38.211,47.183c-0.108-0.616-0.488-1.138-1.041-1.43l-1.158-0.639l1.302-0.181
            c0.62-0.085,1.154-0.444,1.467-0.986c0.313-0.541,0.358-1.185,0.122-1.765l-0.477-1.233l1.115,0.7
            c0.529,0.331,1.169,0.399,1.758,0.186c0.587-0.214,1.035-0.678,1.227-1.273l0.421-1.267c0,0,0.003,0.005,0.006,0.016l0.403,1.252
            c0.192,0.595,0.64,1.059,1.227,1.272c0.588,0.214,1.228,0.146,1.759-0.187l1.132-0.685l-0.496,1.219
            c-0.236,0.58-0.191,1.224,0.122,1.765c0.313,0.542,0.848,0.901,1.466,0.986l1.307,0.204l-1.162,0.615
            c-0.553,0.292-0.933,0.813-1.042,1.43c-0.109,0.616,0.07,1.235,0.489,1.699l0.87,0.996l-1.286-0.276
            c-0.602-0.128-1.215,0.021-1.691,0.409C46.035,50.01,46.019,50,46,50c-0.552,0-1,0.447-1,1v1.533l-0.471-0.605
            c-0.384-0.493-0.963-0.776-1.588-0.776s-1.205,0.283-1.588,0.776L41,52.365V51c0-0.553-0.448-1-1-1
            c-0.052,0-0.096,0.022-0.145,0.029c-0.001-0.001-0.001-0.001-0.002-0.002c-0.479-0.402-1.104-0.556-1.716-0.426l-1.298,0.256
            l0.882-0.976C38.141,48.418,38.32,47.799,38.211,47.183z M43.707,59.293c-0.391-0.391-1.023-0.391-1.414,0L41,60.586v-5.662
            c0.433-0.102,0.829-0.35,1.123-0.729l0.828-1.038l0.807,1.037c0.32,0.413,0.764,0.651,1.242,0.733v5.66L43.707,59.293z M54,56h-7
            v-1.889c0.242-0.347,0.375-0.77,0.358-1.227l-0.034-1.327l1.285,0.276c0.869,0.187,1.72-0.188,2.166-0.96s0.348-1.696-0.25-2.357
            l-0.878-0.995l1.162-0.615c0.787-0.415,1.195-1.25,1.041-2.127s-0.824-1.522-1.706-1.645l-1.313-0.197l0.496-1.219
            c0.335-0.825,0.111-1.728-0.571-2.3c-0.682-0.572-1.609-0.636-2.363-0.162l-1.133,0.692l-0.403-1.252v-0.001
            c-0.274-0.847-1.025-1.394-1.916-1.394s-1.642,0.547-1.916,1.395l-0.422,1.259l-1.113-0.699c-0.754-0.473-1.683-0.411-2.364,0.162
            c-0.683,0.572-0.907,1.475-0.571,2.3l0.485,1.235l-1.303,0.181c-0.882,0.122-1.552,0.768-1.706,1.645s0.254,1.712,1.041,2.127
            l1.167,0.635l-0.883,0.976c-0.597,0.661-0.695,1.586-0.249,2.357c0.445,0.771,1.297,1.149,2.165,0.96l1.301-0.263l-0.049,1.313
            c-0.019,0.519,0.167,0.984,0.477,1.354V56H9V2h29v15h16V56z M31.5,15c0.828,0,1.5-0.672,1.5-1.5S32.328,12,31.5,12
            S30,12.672,30,13.5S30.672,15,31.5,15z M16,21c0,0.553,0.448,1,1,1h29c0.552,0,1-0.447,1-1s-0.448-1-1-1H17
            C16.448,20,16,20.447,16,21z M46,25H17c-0.552,0-1,0.447-1,1s0.448,1,1,1h29c0.552,0,1-0.447,1-1S46.552,25,46,25z M46,30H17
            c-0.552,0-1,0.447-1,1s0.448,1,1,1h29c0.552,0,1-0.447,1-1S46.552,30,46,30z M30,35H17c-0.552,0-1,0.447-1,1s0.448,1,1,1h13
            c0.552,0,1-0.447,1-1S30.552,35,30,35z"/>
    </svg>
`
const DNSSEC_SVG = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <path fill="none" stroke="#B32317" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M59,26H31.826C29.451,20.139,23.713,16,17,16C8.163,16,1,23.163,1,32s7.163,16,16,16c5.919,0,11.074-3.222,13.842-8H41l5-4l3,4h2
            l3-4l3,4h2l4-7L59,26z"/>
        <circle fill="none" stroke="#B32317" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="13" cy="26" r="3"/>
    </svg>
`
const REDIRECT_SVG = `
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <g>
        <path fill="#7D4199" d="M55.617,51.727c-0.331-0.356-0.77-0.592-1.32-0.708v-0.048c0.382-0.159,0.682-0.408,0.899-0.747
            c0.217-0.338,0.325-0.725,0.325-1.159c0-0.374-0.079-0.705-0.236-0.991c-0.157-0.287-0.395-0.516-0.714-0.687
            c-0.295-0.159-0.61-0.264-0.947-0.314C53.289,47.025,52.794,47,52.141,47H49v8.892h3.559c0.617,0,1.126-0.056,1.526-0.167
            c0.4-0.111,0.767-0.299,1.102-0.561c0.283-0.219,0.508-0.496,0.675-0.83c0.167-0.334,0.251-0.723,0.251-1.165
            C56.113,52.564,55.947,52.083,55.617,51.727z M53.151,50.028c-0.068,0.147-0.191,0.263-0.37,0.346
            c-0.163,0.076-0.322,0.117-0.475,0.125c-0.153,0.008-0.421,0.012-0.803,0.012h-0.281V48.63h0.155c0.398,0,0.698,0.003,0.899,0.009
            c0.201,0.006,0.375,0.041,0.523,0.104c0.155,0.068,0.27,0.177,0.343,0.328c0.074,0.151,0.11,0.299,0.11,0.442
            C53.252,49.709,53.218,49.881,53.151,50.028z M53.673,53.704c-0.094,0.169-0.242,0.298-0.445,0.385
            c-0.231,0.1-0.458,0.153-0.681,0.161c-0.223,0.008-0.625,0.012-1.206,0.012h-0.119v-2.228h0.412c0.398,0,0.716,0.003,0.953,0.009
            c0.237,0.006,0.423,0.035,0.558,0.087c0.223,0.08,0.39,0.197,0.502,0.352c0.111,0.155,0.167,0.37,0.167,0.645
            C53.813,53.342,53.767,53.534,53.673,53.704z"/>
        <path id="f" fill="#7D4199" d="M53.016,18v-5.435h1.824l0.273-2.118h-2.098V9.094c0-0.613,0.17-1.031,1.05-1.031l1.122-0.001V6.168
            c-0.194-0.026-0.86-0.083-1.634-0.083c-1.617,0-2.724,0.987-2.724,2.8v1.562H49v2.118h1.829V18H53.016z"/>
        <path fill="#7D4199" d="M52,40c-3.96,0-7.463,1.94-9.65,4.907l-1.197-4.787c-0.134-0.537-0.678-0.86-1.213-0.728
            c-0.536,0.134-0.861,0.677-0.728,1.212l0.887,3.545l-7.889-4.602C33.345,37.27,34,34.713,34,32s-0.655-5.27-1.79-7.548l7.889-4.602
            l-0.887,3.545c-0.134,0.535,0.192,1.078,0.728,1.212c0.082,0.021,0.163,0.03,0.244,0.03c0.448,0,0.855-0.303,0.969-0.758
            l1.197-4.787C44.537,22.06,48.04,24,52,24c6.617,0,12-5.383,12-12S58.617,0,52,0c-6.617,0-12,5.383-12,12
            c0,1.639,0.351,3.191,0.949,4.615l-4.889-1.222c-0.533-0.135-1.079,0.19-1.213,0.728c-0.134,0.535,0.192,1.078,0.728,1.212
            l3.409,0.852l-7.763,4.528C28.182,18.075,22.947,15,17,15C7.626,15,0,22.626,0,32c0,1.524,0.22,2.995,0.599,4.402l-0.041,0.013
            c0.01,0.035,0.051,0.154,0.125,0.312C2.737,43.806,9.267,49,17,49c5.947,0,11.182-3.075,14.221-7.713l7.763,4.528l-3.409,0.852
            c-0.536,0.134-0.861,0.677-0.728,1.212c0.114,0.455,0.521,0.758,0.969,0.758c0.081,0,0.162-0.01,0.244-0.03l4.889-1.222
            C40.351,48.809,40,50.361,40,52c0,6.617,5.383,12,12,12c6.617,0,12-5.383,12-12S58.617,40,52,40z M52,2c5.514,0,10,4.486,10,10
            s-4.486,10-10,10c-5.514,0-10-4.486-10-10S46.486,2,52,2z M5.527,22.357c0.674,0.286,1.182,0.667,1.182,0.869
            c0,0.6-1.077,1.009-1.68,1.07c-1.097,0.11-1.658,1.312-1.645,2.443c0.014,1.198,0.684,2.054,1.668,2.129
            c0.534,0.041,1.682,0.599,2.114,1.256c0.191,0.291,0.136,0.451,0.113,0.52c-0.381,1.114-1.191,2.225-1.734,2.377
            c-0.064,0.019-0.13,0.038-0.28-0.086c-1.069-0.888-2.198-1.212-3.262-0.989C2.016,28.297,3.341,24.954,5.527,22.357z
            M11.764,44.495c-0.196,0.547-0.57,0.865-1.144,0.974l0.018,0.095c-3.138-1.478-5.678-4.007-7.171-7.136
            c0.474-0.016,0.979-0.125,1.514-0.337c1.295-0.514,2.549-0.611,3.274-0.257c0.297,0.146,0.474,0.348,0.558,0.637
            c0.423,1.463,1.326,2.418,2.123,3.261c0.228,0.241,0.451,0.475,0.65,0.715C11.847,42.759,12.045,43.712,11.764,44.495z M17,47
            c-1.435,0-2.818-0.215-4.133-0.592c0.328-0.346,0.604-0.748,0.78-1.237c0.482-1.345,0.257-3.066-0.524-4.004
            c-0.226-0.271-0.476-0.537-0.733-0.809c-0.703-0.743-1.366-1.445-1.655-2.443c-0.241-0.833-0.794-1.482-1.599-1.877
            c-1.252-0.613-3.035-0.543-4.892,0.193c-0.385,0.153-0.924,0.297-1.308,0.121c-0.188-0.087-0.306-0.235-0.379-0.355
            c-0.181-0.654-0.319-1.325-0.41-2.011c0.448-0.195,1.034-0.182,1.841,0.488c0.444,0.369,0.955,0.559,1.481,0.559
            c0.204,0,0.411-0.028,0.616-0.086c1.603-0.451,2.693-2.51,3.085-3.655c0.259-0.757,0.143-1.541-0.335-2.267
            c-0.793-1.207-2.432-1.976-3.439-2.128c-0.034-0.177-0.007-0.467,0.06-0.64c1.386-0.213,3.252-1.148,3.252-3.031
            c0-1.133-0.853-1.896-1.707-2.376C9.659,18.465,13.157,17,17,17c1.436,0,2.821,0.215,4.137,0.593
            c-0.141,0.445-0.185,0.961-0.019,1.528c-0.09,0.021-0.182,0.04-0.264,0.058c-0.5,0.107-1.121,0.24-1.72,0.54
            c-1.212,0.606-1.097,1.896-1.021,2.75c0.099,1.104,0.075,1.555-0.57,1.917c-2.46,1.382-2.041,4.512-1.475,5.975l0.208,0.538
            l0.569,0.089c0.326,0.051,3.236,0.451,4.884-1.303c0.286-0.302,1.545-0.156,2.329,0.53c0.646,0.565,0.346,0.934,0.212,1.108
            c-0.386,0.273-2.216,0.353-3.198,0.396c-1.423,0.062-2.325,0.112-2.914,0.361c-0.97,0.411-1.538,1.151-1.518,1.981
            c0.025,1.028,0.893,1.863,2.58,2.481c1.916,0.703,2.428,1.321,2.563,1.627c0.056,0.128,0.104,0.317-0.031,0.644
            c-0.344,0.836-0.167,1.841,0.486,2.759c0.693,0.973,2.028,1.952,3.896,2.3C23.601,45.825,20.439,47,17,47z M27.955,42.213
            l-0.012-0.211c-2.084,0.121-3.501-0.782-4.076-1.59c-0.267-0.375-0.326-0.691-0.266-0.837c0.312-0.756,0.316-1.521,0.012-2.21
            c-0.479-1.091-1.657-1.95-3.705-2.701c-0.724-0.266-1.05-0.496-1.189-0.625c0.052-0.036,0.123-0.077,0.218-0.117
            c0.286-0.121,1.451-0.172,2.221-0.205c2.408-0.105,3.92-0.23,4.616-1.084c1.032-1.267,0.875-2.806-0.4-3.922
            c-1.418-1.241-3.901-1.673-5.104-0.394c-0.596,0.634-1.747,0.759-2.505,0.744c-0.191-0.827-0.349-2.309,0.756-2.929
            c1.833-1.03,1.676-2.788,1.583-3.838c-0.026-0.291-0.065-0.729-0.077-0.784c0.372-0.186,0.815-0.281,1.244-0.373
            c0.733-0.157,1.492-0.32,1.847-1.03c0.216-0.433,0.199-0.925-0.05-1.461c-0.064-0.137-0.065-0.259-0.046-0.372
            c4.327,1.906,7.586,5.794,8.622,10.511c-0.753,0.616-1.866,1.63-2.504,2.708c-1.076,1.817,0.908,4.667,1.857,5.86
            C30.299,39.168,29.261,40.813,27.955,42.213z M31.715,34.884c-0.654-1.067-1.042-2.058-0.855-2.375
            c0.263-0.444,0.671-0.906,1.098-1.326C31.973,31.456,32,31.724,32,32C32,32.987,31.898,33.95,31.715,34.884z M52,62
            c-5.514,0-10-4.486-10-10s4.486-10,10-10c5.514,0,10,4.486,10,10S57.514,62,52,62z"/>
        </g>
    </svg>
`
export {
    SITE_SVG,
    DNS_SVG,
    CERTIFICATE_SVG,
    AUTORENEWAL_SVG,
    CLOUD_SVG,
    SSL_SVG,
    DNSSEC_SVG,
    REDIRECT_SVG
}