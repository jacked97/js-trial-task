import {useUserProfiles} from './data.ts';
import {GridItem} from '@jacked97/cmp-grid-item';
import {Grid} from '@jacked97/cmp-grid';
import {UserProfile} from '../../api/users/types.ts';
import {Button} from '@jacked97/cmp-button';

const Users = () => {
  const users = useUserProfiles();
  return (
    <>
      <Grid
        items={users?.data?.items || []}
        onItemRender={({item}: {item: UserProfile}) => {
          return (
            <Button variant="unset" onPress={() => {}}>
              <GridItem
                username={item.name}
                age={20}
                imageUrl={item.picture?.url}
                location="Sashashire, Sashashire"
                distance="3501"
                headline="Use the redundant THX system, then you can bypass the redundant system!"
                lastLogin="ONLINE"
              />
            </Button>
          );
        }}
      />
    </>
  );
};

export default Users;
