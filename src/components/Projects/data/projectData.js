export const projectData = {
    grooo: {
        id: 1,
        title: 'Grooo(SNS 웹&모바일)',
        githubUrl: 'https://github.com/LSY0108/Grooo',
        period: '2024.02 ~ 2024.06',
        intro: '일상 속 환경 보호 활동을 공유하고 소통하는 SNS 플랫폼입니다. 사용자들은 일상 속 환경 보호 활동을 공유하고, 다른 사람들과 소통하며 함께 성장할 수 있습니다.',
        summary: '일상 속 환경 보호 활동을 공유하고 소통하는 SNS 플랫폼(웹&모바일)',
        features: [
            '친환경 활동 공유 및 기록',
            '실시간 채팅을 통한 커뮤니티 활성화',
            '\'함께해요\' 기능을 통한 오픈 채팅 공간 제공',
            '개인 맞춤형 친환경 활동 정보 제공'
        ],
        mainFunctions: {
            account: [
                '소셜 로그인 (Google, Kakao, Naver)',
                '일반 회원가입/로그인',
                '프로필 관리 및 비밀번호 변경'
            ],
            sns: [
                '게시물 작성/수정/삭제',
                '좋아요 및 댓글',
                '게시물 공유',
                '팔로우/언팔로우',
                '실시간 알림'
            ],
            chat: [
                '1:1 개인 채팅',
                '그룹 채팅',
                '오픈 채팅방 (함께해요)',
                '실시간 메시지 전송'
            ]
        },
        techStack: {
            backend: ['Java', 'Spring Boot', 'Spring Security', 'JPA'],
            frontend: ['React', 'TailwindCSS'],
            database: ['MySQL', 'AWS EC2', 'AWS S3'],
            tools: ['GitHub'],
            security: ['Spring Security', 'JWT 인증', 'OAuth 2.0', 'BCryptPasswordEncoder']
        }
    },
    bloom: {
        id: 2,
        title: 'Bloom(의류 쇼핑몰)',
        githubUrl: 'https://github.com/LSY0108/Bloom',
        period: '2023.09 ~ 2023.12',
        intro: '현대 소비자들의 온라인 쇼핑 니즈를 충족시키기 위한 의류 쇼핑몰 웹사이트입니다. 사용자 중심의 UI/UX를 통해 편리한 쇼핑 경험을 제공하며, 다양한 의류 상품을 효율적으로 탐색하고 구매할 수 있습니다.',
        summary: 'Spring Boot와 React를 활용한 의류 쇼핑몰 웹사이트',
        features: [
            '직관적인 UI/UX 디자인',
            '효율적인 상품 검색 및 필터링',
            '안전한 결제 시스템',
            '개인화된 상품 추천'
        ],
        mainFunctions: {
            account: [
                '회원가입 및 로그인',
                '마이페이지',
                '주문 내역 조회'
            ],
            shop: [
                '상품 검색 및 필터링',
                '장바구니',
                '주문 및 결제',
                '상품 리뷰'
            ]
        },
        techStack: {
            backend: ['Spring Boot', 'JPA', 'Spring Security'],
            frontend: ['React', 'Redux', 'Styled-Components'],
            database: ['MySQL'],
            tools: ['Git', 'GitHub']
        }
    },
    minihomepage: {
        id: 3,
        title: '미니홈페이지',
        githubUrl: 'https://github.com/LSY0108/minihomepage',
        period: '2023.10 ~ 2023.11',
        intro: '사용자의 소소한 일상들을 기록하고 저장하는 미니홈페이지 프로젝트입니다. 사용자의 경험과 추억을 웹사이트로 구축하여 소중한 순간을 영구적으로 기록할 수 있습니다.',
        summary: 'JSP와 MySQL을 활용한 사용자의 일상과 추억을 기록하고 공유하는 미니홈페이지',
        features: [
            '개인 프로필 관리',
            '게시물 작성 및 관리',
            '방명록 기능',
            '사진첩 관리'
        ],
        mainFunctions: {
            account: [
                '회원가입 및 로그인',
                '프로필 관리'
            ],
            content: [
                '게시글 CRUD',
                '댓글 작성/수정/삭제',
                '사진첩 관리',
                '방명록 작성'
            ]
        },
        techStack: {
            backend: ['Java', 'JSP', 'Servlet'],
            frontend: ['HTML', 'CSS', 'JavaScript'],
            database: ['MySQL'],
            tools: ['NetBeans IDE', 'Apache Tomcat']
        }
    },
    bigdata: {
        id: 4,
        title: '기후변화에 따른 쌀 생산량 분석 및 예측',
        githubUrl: 'https://github.com/LSY0108/BigData-Project',
        period: '2024.10 ~ 2024.12',
        intro: '기후 변화가 국내 주요 쌀 생산지의 생산량에 미치는 영향을 분석하고 미래 생산량을 예측하는 프로젝트입니다.',
        summary: '기후 변화가 국내 주요 쌀 생산지의 생산량에 미치는 영향 분석 및 예측 프로젝트',
        features: [
            '기후 데이터 수집 및 전처리',
            '생산량 예측 모델 개발',
            '데이터 시각화',
            '분석 결과 리포트'
        ],
        mainFunctions: {
            analysis: [
                '데이터 전처리',
                '통계 분석',
                '예측 모델링',
                '결과 시각화'
            ]
        },
        techStack: {
            language: ['Python'],
            libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
            tools: ['Jupyter Notebook']
        }
    },

    portfolio: {
        id: 5,
        title: 'Portfolio',
        githubUrl: 'https://github.com/LSY0108/portfolio',
        period: '2024.10 ~ 2024.11',
        intro: 'React를 활용하여 개발한 개인 포트폴리오 웹사이트입니다. 프로젝트 경험과 기술 스택을 효과적으로 보여주기 위해 제작되었습니다.',
        summary: 'React를 활용한 포트폴리오 사이트',
        features: [
            '반응형 웹 디자인',
            '프로젝트 쇼케이스',
            '기술 스택 소개',
            '깔끔한 UI/UX'
        ],
        mainFunctions: {
            content: [
                '프로젝트 소개',
                '기술 스택 표시',
                '연락처 정보',
                '이력서 다운로드'
            ]
        },
        techStack: {
            frontend: ['React', 'TailwindCSS'],
            tools: ['Git', 'GitHub Pages']
        }
    }
};