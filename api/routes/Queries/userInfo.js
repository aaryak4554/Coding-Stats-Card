const url = `https://leetcode.com/graphql?query=query
{
    userContestRanking(username: "akhilg11") {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
    }
    userContestRankingHistory(username: "akhilg11") {
        attended
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        rating
        ranking
        contest {
            title
            startTime
        }
    }
    recentSubmissionList(username:"akhilg11") {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
        __typename
    }
    allQuestionsCount {
        difficulty
        count
        __typename
    }
    matchedUser(username: "akhilg11") {
        username
        socialAccounts
        githubUrl
        contributions{
            points
            questionCount
            testcaseCount
            __typename
        }
        profile (username: "akhilg11") {
            realName
            websites
            countryName
            skillTags
            company
            school
            starRating
            aboutMe
            userAvatar
            reputation
            ranking
            __typename
        }
        submitStats:submitStatsGlobal {
            acSubmissionNum {
                difficulty
                count
                submissions
                __typename
            }
            totalSubmissionNum {
                difficulty
                count
                submissions
                __typename
            }
             __typename
        }   
    }
}`;
module.exports = url;


// languageList (username: "akhilg11") {
//     id
//     name
//     verboseName
//     __typename
// }
// badges {
//     id
//     displayName
//     icon
//     creationDate
//     medal {
//         slug
//         config {
//             icon
//             iconGif
//             iconGifBackground
//             iconWearing
//             __typename
//         }
//         __typename
//     }
//     __typename
// }
// upcomingBadges {
//     name
//     icon
//     __typename
// }
// activeBadge {
//     id
//     __typename
// }
// __typename