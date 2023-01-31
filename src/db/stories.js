// import db from '$db/connect'
import db from '$db/mongo';

export const stories = db.collection('stories');
