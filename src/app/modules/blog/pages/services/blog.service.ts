// import { HttpClient } from '@angular/common/http';
// import { Injectable, computed, inject, signal } from '@angular/core';
// // import feedbackData from '../../../data.json';
// // import {
// //   Comment,
// //   Feedback,
// //   FeedbackModel,
// //   Reply,
// // } from '../../pages/feedback-list-page/model/feedback.model';
// // import { Tag } from '../../pages/feedback-list-page/model/tag.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class BlogService {
//   private httpClient = inject(HttpClient);

//   data = signal<BlogModel>({
//     currentUser: {
//       image: './assets/user-images/image-anne.jpg',
//       name: 'Anne Valentine',
//       username: 'annev1990',
//     },
//     productRequests: [],
//   });

//   public tag = signal<Tag[]>(
//     [
//       { id: 1, name: 'All', active: true },
//       { id: 2, name: 'UI', active: false },
//       { id: 3, name: 'UX', active: false },
//       { id: 4, name: 'Enhancement', active: false },
//       { id: 5, name: 'Bug', active: false },
//       { id: 6, name: 'Feature', active: false },
//     ],
//     {
//       equal: (a, b) =>
//         a.every((va) =>
//           b.every((vb) => JSON.stringify(va) === JSON.stringify(vb))
//         ),
//     }
//   );

//   constructor() {
//     this.data.set(feedbackData);
//   }

//   getData() {
//     return this.data;
//   }

//   addFeedback(feedback: Feedback) {
//     this.data.update((feedbackModel: FeedbackModel) => {
//       const latestId =
//         feedbackModel.productRequests.length > 0
//           ? feedbackModel.productRequests[
//               feedbackModel.productRequests.length - 1
//             ].id
//           : 0;
//       feedback.id = latestId + 1;
//       feedbackModel.productRequests = [
//         ...feedbackModel.productRequests,
//         feedback,
//       ];
//       return feedbackModel;
//     });
//   }

//   editFeedback(feedback: Feedback) {
//     this.data.update((feedbackModel: FeedbackModel) => {
//       let filtered = feedbackModel.productRequests.filter(
//         (feedbackItem) => feedbackItem.id !== feedback.id
//       );
//       feedbackModel.productRequests = [...filtered, feedback];
//       return feedbackModel;
//     });
//   }

//   deleteFeedback(feedback: Feedback) {
//     this.data.update((feedbackModel: FeedbackModel) => {
//       feedbackModel.productRequests = feedbackModel.productRequests.filter(
//         (feedbackItem) => feedbackItem.id !== feedback.id
//       );
//       return feedbackModel;
//     });
//   }

//   addComment(content: string, feedback: Feedback) {
//     this.data.update((feedbackModel: FeedbackModel) => {
//       const foundFeedback = feedbackModel.productRequests.find(
//         (item) => item.id === feedback.id
//       );
//       if (foundFeedback) {
//         const latestId =
//           foundFeedback.comments.length > 0
//             ? foundFeedback.comments[foundFeedback.comments.length - 1].id
//             : 0;
//         const comment: Comment = {
//           id: latestId + 1,
//           content: content,
//           user: feedbackModel.currentUser,
//           replies: [],
//         };
//         foundFeedback.comments.push(comment);
//       }
//       return feedbackModel;
//     });
//   }

//   addReply(comment: Comment, replyContent: string, username: string) {
//     this.data.update((feedbackModel: FeedbackModel) => {
//       feedbackModel.productRequests.forEach((value: Feedback) => {
//         if (value.comments.some((item) => item.id === comment.id)) {
//           value.comments.forEach((item) => {
//             if (item.id === comment.id) {
//               const reply: Reply = {
//                 content: replyContent,
//                 user: feedbackModel.currentUser,
//                 replyingTo: username,
//               };
//               if (item.replies && item.replies.length > 0) {
//                 item.replies = [...item.replies, reply];
//               } else {
//                 item.replies = [reply];
//               }
//             }
//           });
//         }
//       });
//       return feedbackModel;
//     });
//   }

//   setTagActive(value: Tag) {
//     this.tag.update((tags) => {
//       tags.forEach((tag) => {
//         tag.active = tag.id === value.id;
//         return tag;
//       });
//       return tags;
//     });
//   }

//   getFeedbacksByStatus(status: string) {
//     return computed(() => {
//       console.log(this.data().productRequests);
//       console.log(status);
//       return this.data().productRequests.filter((value: Feedback) => {
//         return value.status === (status ?? '').toLowerCase();
//       });
//     });
//   }
// }
