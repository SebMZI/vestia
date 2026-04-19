import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Card } from './card.entity';
import { Tag } from '../../boards/entities/tag.entity';

@Entity('card_tags')
export class CardTag {
  @PrimaryColumn()
  tag_id: number;

  @PrimaryColumn()
  card_id: number;

  @ManyToOne(() => Tag, (tag) => tag.cardTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;

  @ManyToOne(() => Card, (card) => card.cardTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'card_id' })
  card: Card;
}